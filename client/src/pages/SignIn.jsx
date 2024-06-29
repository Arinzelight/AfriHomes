import React, { useRef, useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { PulseLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import background from "../assets/images/LandingPage/landing_7.jpg";
import OAuth from "../components/OAuth";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import toast from "react-hot-toast";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const passwordInputRef = useRef(null);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    const passwordInput = passwordInputRef.current;
    if (passwordInput) {
      passwordInput.type = showPassword ? "password" : "text";
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields"));
    }

    try {
      dispatch(signInStart());
      const res = await axios.post("/api/auth/signin", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200 || res.status === 201) {
        dispatch(signInSuccess(res.data));
        toast.success("Login successful");
        navigate("/");
      } else {
        dispatch(
          signInFailure(
            res.data.message || "Internal Server Error. Please try again later."
          )
        );
      }
    } catch (error) {
      if (error.response) {
        dispatch(
          signInFailure(
            error.response.data.message ||
              "Internal Server Error. Please try again later."
          )
        );
      } else if (error.request) {
        dispatch(
          signInFailure(
            "Network error. Please check your connection and try again."
          )
        );
      } else {
        dispatch(
          signInFailure("An unknown error occurred. Please try again later.")
        );
      }
    }
  };

  // Cleanup effect to reset loading state
  useEffect(() => {
    return () => {
      dispatch(signInFailure(null));
    };
  }, [dispatch]);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-75 rounded-lg shadow-md p-6 w-[370px] sm:mx-auto mx-5">
        <h6 className="text-3xl text-center font-semibold my-7">Sign In</h6>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
          {/* Display error message */}
          {errorMessage && (
            <p
              aria-live="assertive"
              className="bg-red-500 text-white text-center py-2 rounded-md"
            >
              {errorMessage}
            </p>
          )}
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border p-3 rounded-lg"
            autoComplete="off"
            onChange={handleChange}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              ref={passwordInputRef}
              autoComplete="off"
              className="border p-3 rounded-lg w-full"
              onChange={handleChange}
            />
            {showPassword ? (
              <AiOutlineEye
                className="absolute right-3 top-4 cursor-pointer"
                onClick={handleShowPassword}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-3 top-4 cursor-pointer"
                onClick={handleShowPassword}
              />
            )}
          </div>
          <button
            type="submit"
            className="border-[1.4px] border-purple-400 p-3 text-purple-600 hover:bg-purple-50 rounded-lg hover:opacity-80 transition duration-300 ease-in-out"
            disabled={loading}
          >
            {loading ? (
              <>
                <PulseLoader color="purple" size={6} margin={2} />
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* Login with Google */}
        <div className="w-full flex flex-col ">
          <h3 className="text-center my-3">Or</h3>
          <OAuth />
        </div>

        <div className="flex gap-2 mt-5">
          <p>Don't have an account?</p>
          <Link to="/sign-up">
            <span className="text-purple-500">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
