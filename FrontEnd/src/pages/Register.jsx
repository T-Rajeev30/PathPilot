import React, { useState } from "react";
import registersvg from "../assets/Register-bro.svg";
import { toast } from "react-toastify";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error("Please fill all fields");
      return;
    }
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
      const { data } = await registerUser({ name, email, password });
      toast.success("Registration Successfull Please Login ! ");
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      navigate("/login"); // Redirect to Dashboard
    } catch (error) {
      toast.error(error.response?.data?.message || "SomeThing Went Wrong");
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
            <h2 className="text-gray-500 mt-2">Create Your Account</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
              {/* Name */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="
                    w-full px-4 py-3
                    border border-gray-300 rounded-lg
                    bg-indigo-50/40
                    focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
                    text-gray-800 placeholder-gray-400
                  "
                />
              </div>

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
                Sign-Up
              </button>
            </form>

            {/* Sign Up */}
            <p className="text-gray-500 text-sm mt-6 text-center">
              Already have an account?{" "}
              <a
                href="/"
                className="text-orange-500 font-semibold hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="
            rightsection w-full hidden md:w-1/2
            bg-gradient-to-br from-orange-500 to-red-400
            md:flex items-center justify-center 
          "
        >
          {/* Replace with your illustration */}
          <img src={registersvg} alt="" />

          {/* Decorative blobs (optional) */}
        </div>
      </div>
    </div>
  );
};

export default Register;
