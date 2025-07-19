import React, { useState } from "react";
import loginsvg from "../assets/Login-bro.svg";
import { toast } from "react-toastify";
import { loginUser } from "../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    console.log({ email, password });
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning("Enter a valid email");
      return;
    }

    // Password length check
    if (password.length < 6) {
      toast.info("Password must be at least 6 characters long");
      return;
    }

    try {
      const { data } = await loginUser({ email, password });
      toast.success("Login Successful");
      console.log(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid Credentials ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300 px-4">
      <div
        className="
          flex flex-col md:flex-row w-full md:w-4/5 lg:w-3/4 max-w-5xl
          bg-white rounded-2xl shadow-2xl
          transition-transform duration-500
          hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          overflow-hidden
        "
      >
        {/* Left Section */}
        <div className="leftsection w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <h1 className="text-4xl font-extrabold text-gray-800">PathPilot</h1>
            <h2 className="text-gray-500 mt-2">Login to Your Account</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="
                    w-full px-4 py-3
                    border border-gray-300 rounded-lg
                    bg-indigo-50/40
                    focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
                    text-gray-800 placeholder-gray-400
                  "
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="
                    w-full px-4 py-3
                    border border-gray-300 rounded-lg
                    bg-indigo-50/40
                    focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
                    text-gray-800 placeholder-gray-400
                  "
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right -mt-2">
                <a href="#" className="text-xs text-orange-500 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  mt-2 w-full
                  bg-gradient-to-r from-orange-500 to-red-500
                  text-white py-3 rounded-lg font-semibold
                  shadow-md hover:shadow-lg
                  transition-transform hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400
                "
              >
                Login
              </button>
            </form>

            {/* Sign Up */}
            <p className="text-gray-500 text-sm mt-6 text-center">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-orange-500 font-semibold hover:underline"
              >
                Sign Up
              </a>
            </p>

            {/* Social Login */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                type="button"
                className="
                  border rounded-lg px-4 py-2 flex items-center space-x-2
                  hover:bg-gray-100 transition
                "
              >
                <img
                  src="https://imgs.search.brave.com/ur_TJVgToKKE9lXUwEwjTYu61SU6KS9PWvTiNM0Uy1Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1sb2dv/LWljb24tZG93bmxv/YWQtaW4tc3ZnLXBu/Zy1naWYtZmlsZS1m/b3JtYXRzLS1uZXct/bG9nb3MtcGFjay1p/Y29ucy0yNDc2NDc5/LnBuZz9mPXdlYnAm/dz0xMjg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="text-sm">Google</span>
              </button>
              <button
                type="button"
                className="
                  border rounded-lg px-4 py-2 flex items-center space-x-2
                  hover:bg-gray-100 transition
                "
              >
                <img
                  src="https://imgs.search.brave.com/e0Jcli1WlrcEnEuLGmJxT0ub6VLUWnnP0xkl_0IY5zQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy80NzU2NTQv/Z2l0aHViLWNvbG9y/LnN2Zw"
                  alt="GitHub"
                  className="w-5 h-5"
                />
                <span className="text-sm">GitHub</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="
            rightsection w-full md:w-1/2
            bg-gradient-to-br from-orange-500 to-red-400
            flex items-center justify-center relative
            p-10
          "
        >
          {/* Replace with your illustration */}
          <img src={loginsvg} alt="" />

          {/* Decorative blobs (optional) */}
          <span className="absolute w-32 h-32 rounded-full bg-white/20 text-amber-50 blur-2xl top-8 left-8">
            {" "}
            Testing
          </span>
          <span className="absolute w-40 h-40 rounded-full bg-white/10 text-amber-50 blur-3xl bottom-10 right-10">
            Something
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
