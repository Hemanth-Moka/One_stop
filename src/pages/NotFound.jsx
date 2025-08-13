import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white font-['Poppins']">
      <div className="text-center px-4">
        <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-200"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
