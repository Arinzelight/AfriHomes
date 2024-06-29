import React, { useRef, useState, useEffect } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import OAuth from "../components/OAuth";
import { PulseLoader } from "react-spinners";
import background from "../assets/images/LandingPage/landing_7.jpg";

const SignUp = () => {
  const usernameRef = useRef(null);
  const passwordInputRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    general: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Focus on username input on component mount
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  // Toggle password visibility
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    const passwordInput = passwordInputRef.current;
    if (passwordInput) {
      passwordInput.type = showPassword ? "password" : "text";
    }
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validate password strength
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    if (!formData.username || !formData.email || !formData.password) {
      errors.general = "Please fill out all fields";
    }

    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validatePassword(formData.password)) {
      errors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    setLoading(true);
    setErrorMessage({ general: "", email: "", password: "" });

    try {
      const response = await axios.post("/api/auth/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Account created successfully");
      navigate("/sign-in");
    } catch (error) {
      if (!error.response) {
        setErrorMessage({
          ...errorMessage,
          general: "No server response, check your internet connection",
        });
      } else {
        const errorMsg = error.response.data.message || "Registration failed";
        setErrorMessage({ ...errorMessage, general: errorMsg });
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value.trim(),
    }));

    // Clear specific field error message on change
    if (id === "email" && errorMessage.email) {
      setErrorMessage({ ...errorMessage, email: "" });
    }
    if (id === "password" && errorMessage.password) {
      setErrorMessage({ ...errorMessage, password: "" });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-75 rounded-lg shadow-md p-6 w-[370px] sm:mx-auto mx-5">
        <h6 className="text-3xl text-center font-semibold mb-4">Sign Up</h6>
        <form className="flex flex-col gap-4 relative" onSubmit={handleSubmit}>
          {errorMessage.general && (
            <p
              aria-live="assertive"
              className="bg-red-500 text-white text-center py-2 rounded-md"
            >
              {errorMessage.general}
            </p>
          )}
          <input
            type="text"
            id="username"
            placeholder="Username"
            ref={usernameRef}
            autoComplete="off"
            value={formData.username}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            disabled={loading}
          />
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
              disabled={loading}
            />
            {errorMessage.email && (
              <p className="text-[12px] text-red-500 flex items-center gap-1 mt-2">
                <AiOutlineInfoCircle />
                {errorMessage.email}
              </p>
            )}
          </div>
          <div className="flex flex-col relative">
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                ref={passwordInputRef}
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
                disabled={loading}
              />
              {showPassword ? (
                <AiOutlineEye
                  className="absolute right-3 cursor-pointer"
                  onClick={handleShowPassword}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-3 cursor-pointer"
                  onClick={handleShowPassword}
                />
              )}
            </div>
            {errorMessage.password && (
              <p className="text-[12px] text-red-500 flex items-center gap-1 mt-2">
                <AiOutlineInfoCircle size={20} />
                {errorMessage.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="border-[1.4px] border-purple-400 p-3 text-purple-600 hover:bg-purple-50 rounded-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            {loading ? (
              <>
                <PulseLoader color="purple" size={6} margin={2} />
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        {/* Signup with Google */}
        <div className="w-full flex flex-col ">
          <h3 className="text-center my-3">Or</h3>
          <OAuth />
        </div>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-purple-500">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
