'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./Header";

const Sidebar = ({menu}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if(window.innerWidth >= 768) {
                setIsSidebarOpen(true)
            } else {
                setIsSidebarOpen(false)
            }
        }
        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile)
    }, [])




  return (
    <aside className={` ${isSidebarOpen ? 'w-64' : 'hidden'} bg-gray-900 min-h-screen fixed text-white p-3`}>
      <h2 className="bg-gray-700 text-xl p-4 rounded-md font-semibold">RM</h2>
      <div className="flex flex-col gap-5 mt-10">
        {menu.map((menu, index) => (
          <Link
            key={index}
            href={menu?.link}
            className="text-gray-300 font-medium w-full hover:bg-gray-800 p-2 rounded"
          >
            {menu?.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
