import React from "react";
import { Link } from "react-router-dom"
import background from "../assets/images/background.jpg";
import OAuth from "../components/OAuthButton";

export default function SignUp() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-75 rounded-lg shadow-md p-6 w-[370px] sm:mx-auto mx-5">
        <h6 className="text-3xl text-center font-semibold my-7">Join Us or Sign Up</h6>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Username" className="border p-3 rounded-lg" id="Username" />
          <input type="text" placeholder="Email" className="border p-3 rounded-lg" id="Email" />
          <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="Password" />
          <button
            type="submit"
            className="border border-purple-400 p-3 text-purple-500 rounded-lg hover:bg-transparent"
          >
            Join
          </button>
          <OAuth/>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
          <span className="text-purple-400">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
