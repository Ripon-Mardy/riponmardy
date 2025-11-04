"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Menu } from "lucide-react";

const Header = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-sm border-b border-gray-200">
      <div className="p-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        <button className="text-red-500 font-medium hidden md:block">
          Logout
        </button>
        {/* mobile bar  */}
        <Menu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-5 h-5 text-gray-800 cursor-pointer md:hidden"
        />

        {isMenuOpen && (
          <div className="absolute left-0 top-full bg-gray-800 text-white w-full md:hidden">
            {menu.map((menu, index) => (
              <div>
                <Link
                  key={index}
                  href={menu?.link}
                  className="flex flex-col p-4 font-medium text-sm cursor-pointer"
                >
                  {menu?.name}
                </Link>
              </div>
            ))}
            <button className="text-red-500 font-medium p-4">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
