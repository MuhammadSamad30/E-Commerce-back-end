"use client";

import React from "react";
import Link from "next/link";

const EcoShop: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-green-200 flex items-center py-2 justify-center">
      <div className="max-w-4xl mx-auto text-center p-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-6">
          Welcome to <span className="text-emerald-600">EcoShop</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
          Discover a world of sustainable living. At <span className="font-semibold text-green-700">EcoShop</span>, 
          we provide eco-friendly products that care for the planet and your well-being. Together, we can build a greener future.
        </p>

        <Link href="/product" className="inline-block bg-emerald-500 text-white font-medium text-lg px-6 py-3 rounded-md shadow-md hover:bg-emerald-600 hover:scale-105 transition-transform duration-300 ease-in-out"> Browse Products
        </Link>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-pulse absolute top-1/3 left-1/4 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-2xl"></div>
          <div className="animate-pulse absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-400 rounded-full opacity-25 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default EcoShop;
