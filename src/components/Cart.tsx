"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/cartContext";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const handleBuyNow = (item: any) => {
    const query = new URLSearchParams({
      item: JSON.stringify(item),
    }).toString();

    router.push(`/checkout?${query}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Your Cart
        </h1>
        {cart.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {cart.map((item: any) => (
              <li
                key={item._id}
                className="flex justify-between items-center py-4"
              >
                <div>
                  <h3 className="text-base font-medium text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-800">
                    Price: Rs. {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleBuyNow(item)}
                    className="py-1 my-2 px-[20%] border-spacing-2 font-bold border-4 p-2 rounded-lg hover:bg-[#6769b6] hover:text-[#c6c8e7]"
                  >
                    Buy
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
