"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 px-4">
      {/* 404 Title */}
      <h1 className="text-[120px] md:text-[150px] font-extrabold text-blue-600 leading-none">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-3 max-w-md text-center">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition font-medium"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>

        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
        >
          <Home size={18} />
          Home
        </Link>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} DevRipon. All rights reserved.
      </p>
    </div>
  );
}
