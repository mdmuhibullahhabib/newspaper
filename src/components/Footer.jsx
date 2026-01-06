import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-base-200 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-red-600">
              Daily News
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              নির্ভরযোগ্য সংবাদ, সময়োপযোগী বিশ্লেষণ এবং সর্বশেষ আপডেট—
              দেশ ও বিশ্বের খবর এক জায়গায়।
            </p>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-semibold mb-3">বিভাগ</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="/category/national" className="hover:text-red-600">জাতীয়</Link></li>
              <li><Link to="/category/international" className="hover:text-red-600">আন্তর্জাতিক</Link></li>
              <li><Link to="/category/sports" className="hover:text-red-600">খেলা</Link></li>
              <li><Link to="/category/technology" className="hover:text-red-600">প্রযুক্তি</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold mb-3">গুরুত্বপূর্ণ</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a className="hover:text-red-600 cursor-pointer">আমাদের সম্পর্কে</a></li>
              <li><a className="hover:text-red-600 cursor-pointer">যোগাযোগ</a></li>
              <li><a className="hover:text-red-600 cursor-pointer">গোপনীয়তা নীতি</a></li>
              <li><a className="hover:text-red-600 cursor-pointer">শর্তাবলি</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">যোগাযোগ</h3>
            <p className="text-gray-700">
              ইমেইল: info@dailynews.com <br />
              ঢাকা, বাংলাদেশ
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-6"></div>

        {/* Bottom */}
        <div className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Daily News. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
}
