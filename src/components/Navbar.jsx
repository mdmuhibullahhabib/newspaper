import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "জাতীয়", path: "/category/national" },
    { name: "আন্তর্জাতিক", path: "/category/international" },
    { name: "খেলা", path: "/category/sports" },
    { name: "প্রযুক্তি", path: "/category/technology" },
    { name: "বিনোদন", path: "/category/entertainment" },
  ];

  return (
    <header className="bg-base-100 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo */}
          <NavLink
            to="/"
            className="text-3xl font-extrabold text-red-600 tracking-tight"
          >
            Daily News
          </NavLink>

          {/* Center: Desktop Menu */}
          <nav className="hidden lg:flex gap-6 text-[16px] font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "hover:text-red-600 pb-1"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right: Search + Mobile */}
          <div className="flex items-center gap-2">

            {/* Search (Desktop) */}
            <div className="hidden lg:block">
              <input
                type="text"
                placeholder="খুঁজুন..."
                className="input input-bordered input-sm w-40"
              />
            </div>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex={0} className="btn btn-ghost text-xl">
                ☰
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </header>
  );
}
