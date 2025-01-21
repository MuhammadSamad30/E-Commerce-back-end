"use client";

import React from "react";
import { useWishlist } from "@/app/context/WishlistContext";

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Your Wishlist
        </h1>
        {wishlist.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {wishlist.map((item) => (
              <li key={item._id} className="flex justify-between items-center py-4">
                <div>
                  <h3 className="text-base font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
