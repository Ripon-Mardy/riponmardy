import React from "react";
import Image from "next/image";

import riponImage from "@/public/ripon.jpg";

const Banner = () => {
  return (
    <main className="max-w-6xl mx-auto mt-16">
      <div className="flex items-start justify-start gap-10 md:gap-0 md:space-x-10 px-4 md:flex-row flex-col">
        {/* Image  */}
        <div className="h-full w-80">
          <Image
            src={riponImage}
            width={30}
            height={30}
            layout="responsive"
            className="w-full h-full object-cover rounded-md"
            alt="ripon-image"
          />
        </div>
        {/* text  */}
        <div className="text-left mt-5">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-6xl font-medium relative flex" >
            Hi, I'm Ripon Mardy
            <span className="text-sm bg-gray-100 h-fit px-2 rounded-md ml-2 font-thin border border-gray-200 hidden md:inline-block">
              Software Engineer
            </span>
          </h2>
          <h3 className="text-2xl">Full Stack Web Developer with 4+ years of experience.</h3>
          <p className="text-2xl">I <strong className="font-semibold">design</strong>, <strong>code</strong>, and <strong>deploy</strong> things that live on the web.</p>
          </div>
          {/* “I’m Interested In” */}
          <div className="mt-16">
            <h2 className="text-2xl font-medium">I’m Interested In</h2>
            <div className="space-y-2 mt-3">
                <p className="text-lg">* Solving complex problems with simple solutions</p>
                <p className="text-lg">* Building products that truly help people</p>
                <p className="text-lg">* Learning new technologies and improving every day</p>
                <p className="text-lg">* Writing code that’s clean, clear, and scalable</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Banner;
