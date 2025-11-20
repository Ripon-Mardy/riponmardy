"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isError, setIsError] = useState("");

  const router = useRouter();
  const apiKey = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${apiKey}/api/login`, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setIsError('Invalid Username or Password')
    }
  };

  return (
    <div className="h-screen flex items-center justify-center gap-2 bg-gray-50">
      <form
        onSubmit={handleFormSubmit}
        className="max-w-md w-full border border-gray-200 rounded-md p-4 space-y-6 bg-white"
      >
        <h2 className="text-2xl font-semibold flex items-center justify-center">
          Admin Login
        </h2>
        {isError && (
            <span className="bg-red-100 border-l-2 border-red-500 p-2 text-red-700 rounded-md w-full text-sm inline-block">
          {isError}
        </span>
        )}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-800"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={handleInputChange}
            value={formData.username}
            className="w-full border border-gray-300 rounded-md p-2 outline-none bg-transparent text-sm font-medium text-gray-800"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-800"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 outline-none bg-transparent text-sm font-medium text-gray-800"
            placeholder="Password"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="p-2 text-white rounded-md px-9 bg-blue-500 font-medium text-sm"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
