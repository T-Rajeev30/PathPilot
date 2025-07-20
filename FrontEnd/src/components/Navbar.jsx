import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">Welcome, User</span>
          <button
            onClick={handleLogout}
            className="bg-white/20 px-3 py-1 rounded-md text-sm hover:bg-white/30"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
