"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import { useUserContext } from "@/app/context/UserContext";

interface SelectedItem {
  name: string;
  price: number;
  quantity: number;
}

const CheckoutContent = () => {
  const searchParams = useSearchParams();
  const { addOrder, setUserDetails } = useUserContext();

  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const item = searchParams.get("item");
    if (item) {
      try {
        setSelectedItem(JSON.parse(item));
      } catch (error) {
        console.error("Error parsing item from searchParams:", error);
      }
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedItem) {
      alert("No product selected for checkout.");
      return;
    }

    setUserDetails(name, email);

    addOrder({
      id: Math.random().toString(36).substring(2, 9),
      date: new Date().toLocaleDateString(),
      total: selectedItem.price * selectedItem.quantity,
      status: "Processing",
    });

    alert("Order placed successfully! Check your Profile");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 lg:p-10">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Checkout
        </h1>

        {selectedItem ? (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Product Details
              </h2>
              <p className="text-gray-700">Name: {selectedItem.name}</p>
              <p className="text-gray-700">Quantity: {selectedItem.quantity}</p>
              <p className="text-gray-700">
                Price: Rs.{" "}
                {(selectedItem.price * selectedItem.quantity).toFixed(2)}
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Shipping Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your address"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-600 transition"
              >
                Place Order
              </button>
            </form>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No product selected for checkout.
          </p>
        )}
      </div>
    </div>
  );
};

const Checkout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
};

export default Checkout;
