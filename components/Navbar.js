'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu } from "lucide-react";

import github from "@/public/social/github.png";
import linkedin from "@/public/social/linkedin.png";

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

  const menus = [
    { name: "Projects", link: "/" },
    { name: "Resume", link: "/" },
    { name: "Github", link: "/", icon: github },
    { name: "LinkedIn", link: "/", icon: linkedin },
  ];

  return (
    <>
      <nav className="relative max-w-6xl mx-auto flex justify-between items-center p-4 border-b border-gray-200">
        {/* logo  */}
        <Link
          href={"/"}
          className="bg-blue-600 p-1 rounded-sm text-white font-semibold"
        >
          RM
        </Link>
        {/* bar  */}
        <Menu onClick={() => setShowNavbar(!showNavbar)} className="md:hidden cursor-pointer" />
        {/* menus  */}
        <div className="hidden md:flex items-center justify-center space-x-10 ">
          {menus.map((menu, index) => (
            <Link key={index} href={menu.link}>
              {menu?.icon ? (
                <Image
                title={menu.name}
                  src={menu.icon}
                  alt={menu.name}
                  width={22}
                  height={22}
                  className="object-contain"
                />
              ) : (
                <span>{menu.name}</span>
              )}
            </Link>
          ))}
        </div>

        {/* mobile menu  */}
        {
         showNavbar && (
             <div className="absolute left-0 top-full bg-gray-300 w-full p-4 md:hidden">
            <div className="flex flex-col  items-start justify-start space-y-5">
              {menus.map((menu, index) => (
                <Link key={index} href={menu.link}>
                  {menu?.icon ? (
                    <Image
                      src={menu.icon}
                      alt={menu.name}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  ) : (
                    <span>{menu.name}</span>
                  )}
                </Link>
              ))}
            </div>
            <Link
              href={"/contact-me"}
              className="block border border-gray-800 w-fit rounded-md px-5 text-gray-600 text-base mt-5"
            >
              Contact Me
            </Link>
          </div>
         )
        }
        {/* contact me  */}
        <Link
          href={"/contact-me"}
          className="hidden md:block border border-gray-300 rounded-md p-1 px-5 text-gray-800 text-base"
        >
          Contact Me
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
