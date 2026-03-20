"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, totalPages }) => {
  const router = useRouter();

  const changePage = (newPage) => {
    router.replace(`/projects?page=${newPage}`);
  };
  return (
    <div className="flex items-center justify-center gap-5 mt-10">
      {/* prev  */}
      <button
        disabled={page === 1}
        onClick={() => changePage(page - 1)}
        className="bg-gray-200 px-4 py-1 rounded text-sm border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => changePage(i + 1)}
          className={`px-3 py-1 border rounded ${
            page === i + 1 ? "bg-orange-500 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* Next  */}
      <button
        disabled={page === totalPages}
        onClick={() => changePage(page + 1)}
        className="bg-gray-200 px-4 py-1 rounded text-sm border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
