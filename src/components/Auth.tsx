"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";

const Auth = () => {
  const email = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const emailResponse = email?.current?.value;
    e.preventDefault();

    const url = await fetch("/api/auth", {
      method: "POST",
      headers: {
        Content_Type: "application/json",
      },
      body: JSON.stringify({ email: emailResponse }),
    });
    const data = await url.json();

    if (data.redirectUrl) {
      router.push(data.redirectUrl);
    }
  };
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Login
        </h2>
        <div className="mb-4">
          <input
            placeholder="Enter email"
            ref={email}
            className="w-full bg-gray-100 text-gray-800 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white rounded-lg py-3 hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
