"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menus = [
    {
      name: "Home",
      link: "/dashboard",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  return (
    <div className=" bg-gray-200 h-screen py-8 w-2/12">
      <div className="">
        <div className="pl-8">
          <Link
            href={"/dashboard"}
            className="bg-blue-600 text-white p-1 rounded-md font-medium w-fit"
          >
            RM
          </Link>
        </div>

        <div className="flex items-start gap-3 flex-col mt-8">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className={`w-full text-gray-900 transition duration-100 pl-8 p-2 ${
                pathname === menu.link ? "bg-red-500" : ""
              } `}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
