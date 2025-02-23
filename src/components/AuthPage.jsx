import React, { useState } from "react";
import { FaTimes, FaGoogle } from "react-icons/fa";

const AuthPage = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Logged in successfully!");
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In Clicked!");
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
      onClick={onClose} // Close modal when clicking outside
    >
      <div 
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full relative cursor-auto"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Login</h2>
          <button 
            onClick={onClose} 
            className="text-gray-600 dark:text-gray-300 hover:text-red-500"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
            Email/Username:
          </label>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Enter your email or username"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
            Password:
          </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Enter your password"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-2">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handleLogin}
          >
            Login
          </button>
          <button 
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Register
          </button>
          <button 
            onClick={handleGoogleSignIn}
            className="px-4 py-2 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;



