"use client";
import React from "react";
import { useUserContext } from "@/app/context/UserContext";

const UserProfile: React.FC = () => {
  const { userData } = useUserContext();

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* User Info */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-600 mt-2">
            Manage your account and track your orders.
          </p>
          <div className="mt-4">
            <p className="text-gray-800">
              <span className="font-semibold">Name:</span> {userData.name}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
          </div>
        </div>

        {/* Order History */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order History
          </h2>
          {userData.orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 border border-gray-200">Order ID</th>
                    <th className="p-3 border border-gray-200">Date</th>
                    <th className="p-3 border border-gray-200">Total</th>
                    <th className="p-3 border border-gray-200">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="p-3 border border-gray-200">{order.id}</td>
                      <td className="p-3 border border-gray-200">
                        {order.date}
                      </td>
                      <td className="p-3 border border-gray-200">
                        Rs. {order.total.toFixed(2)}
                      </td>
                      <td className="p-3 border border-gray-200">
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600">You have no orders yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
