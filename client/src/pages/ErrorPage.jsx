import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div className="flex space-x-4">
        <Link to="/">
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
