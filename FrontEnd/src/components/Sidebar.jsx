import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-[#1E1E2E] text-white min-h-screen flex flex-col shadow-lg">
      {/* Logo */}
      <div className="px-6 py-4 text-2xl font-extrabold tracking-tight">
        PathPilot
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem to="/dashboard" label="Dashboard" />
        <NavItem to="/finance" label="Finance" />
        <NavItem to="/transactions" label="Transactions" />
        <NavItem to="/settings" label="Settings" />
      </nav>
    </aside>
  );
};

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md text-sm transition ${
        isActive
          ? "bg-orange-500 text-white font-semibold"
          : "hover:bg-white/10 text-gray-200"
      }`
    }
  >
    {label}
  </NavLink>
);

export default Sidebar;
