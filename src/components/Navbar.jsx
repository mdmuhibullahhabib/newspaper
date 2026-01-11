import React from 'react'
import { Link } from "react-router-dom";
import { Search, Menu, Globe, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-white">

      {/* ===== TOP BAR ===== */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="text-3xl font-extrabold tracking-tight">
            প্রথম
            <span className="text-red-600">আলো</span>
          </span>
        </Link>

        {/* Top Headlines */}
        <div className="hidden lg:flex gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-2 max-w-[220px]">
              <img
                src="https://via.placeholder.com/60x40"
                alt=""
                className="w-14 h-10 object-cover"
              />
              <p className="text-xs leading-snug line-clamp-2 hover:text-red-600 cursor-pointer">
                চায়ের দোকান থেকে মেডিকেল কলেজ: ইমনের...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MENU BAR ===== */}
      <div className="border-t border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">

          {/* Categories */}
          <nav className="flex items-center gap-5 text-sm font-medium">
            {[
              "সর্বশেষ",
              "বাংলাদেশ",
              "রাজনীতি",
              "বিশ্ব",
              "বাণিজ্য",
              "মতামত",
              "খেলা",
              "বিনোদন",
              "চাকরি",
              "জীবনযাপন",
              "ভিডিও",
            ].map((item) => (
              <Link
                key={item}
                to="#"
                className="hover:text-red-600 whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5 text-sm">
            <button className="flex items-center gap-1 hover:text-red-600">
              <Search size={18} />
              <span>খুঁজুন</span>
            </button>

            <button className="hover:text-red-600">ই-পেপার</button>

            <button className="flex items-center gap-1 hover:text-red-600">
              <Globe size={16} /> Eng
            </button>

            <button className="flex items-center gap-1 hover:text-red-600">
              <User size={16} /> Login
            </button>

            <button className="hover:text-red-600">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
