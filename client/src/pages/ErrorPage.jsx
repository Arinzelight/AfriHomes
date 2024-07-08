import React from "react";

// import error_1 from "../images/error/error_1.png";
// import error_2 from "../images/error/error_2.png";

const ErrorPage = () => {
  return (
    <div>
      <div className="relative flex sm:flex-row flex-col sm:pl-0 pl-[10px]">
        <img
          // src={error_1}
          alt="error"
          className="sm:h-[450px] h-[350px] sm:w-[450px] w-[350px] mt-[-20px] sm:ml-[40px]"
        />
        <img
          // src={error_2}
          alt="error"
          className="sm:h-[450px] h-[350px] sm:w-[450px] w-[350px] sm:mt-[-20px] mt-[-100px] sm:ml-[-40px]"
        />
      </div>
      <div className="border-b pb-4">
        <p className="text-xl pt-6 sm:pl-[700px] pl-10 sm:mt-[-80px] mt-[-60px]">
          Sorry the page you are looking for does not exist or have been moved.
        </p>
        <div className="flex flex-row items-center justify-space-between space-x-6 pt-2 sm:pl-[800px] pl-[80px]">
          <button className="bg-white border-2 border-purple-600 text-purple-600 py-2 px-4 rounded-lg">
            Go Back
          </button>
          <button className="bg-white border-2 border-yellow-600 text-yellow-600 py-2 px-4 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
