import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white font-['Poppins']">
      <div className="text-center px-4 mb-20">
        <h1 className="text-9xl font-extrabold text-red-600 mb-4 mt-0 leading-none">
          404
        </h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 text-lg max-w-md mx-auto">
          Oops! The page you are looking for does not exist. It might have been removed, renamed, or never existed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors duration-200"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
