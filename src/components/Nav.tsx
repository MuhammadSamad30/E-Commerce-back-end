"use client";
import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#f0d9d9a4] shadow-md">
      <div className="container mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/nav-logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="max-w-[100px]"
          />
        </Link>

        {/* Mobile */}
        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <span className="text-3xl">☰</span>
        </button>

        <div className="lg:flex w-full lg:w-auto lg:items-center hidden">
          <ul className="flex flex-row lg:space-x-4 mr-2 w-full lg:w-auto items-center space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-500 px-2 py-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-800 hover:text-blue-500 px-2 py-1"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/category"
                className="text-gray-800 hover:text-blue-500 px-2 py-1"
              >
                Category
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Link
              href="profile"
              aria-label="Profile"
              className="text-xl text-gray-700"
            >
              <CgProfile />
            </Link>
            <Link
              href="wishlist"
              aria-label="Wishlist"
              className="text-xl text-gray-700"
            >
              <FaHeartCirclePlus />
            </Link>
            <Link
              href="cart"
              aria-label="Cart"
              className="text-xl text-gray-700"
            >
              <IoIosCart />
            </Link>
            <Link
              href="checkout"
              aria-label="Checkout"
              className="text-xl text-gray-700"
            >
              <IoBagCheckOutline />
            </Link>
            <Link
              href="/login"
              className="inline-block mt-2 px-4 py-1 bg-[#6c4db47a] text-white border-spacing-8 border-4 border-[#2222] text-lg font-medium rounded-xl hover:bg-[#9373dd7a] transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform ease-in-out duration-300`}
        onClick={toggleMenu}
      >
        <div
          className={`w-64 h-full bg-[#f0d9d9a4] shadow-lg transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform ease-in-out duration-300`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-2xl text-gray-700"
              aria-label="Close sidebar"
            >
              ✖
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-6 py-4">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-500 px-4 py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="text-gray-800 hover:text-blue-500 px-4 py-2"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/category"
                className="text-gray-800 hover:text-blue-500 px-4 py-2"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                aria-label="Profile"
                className="text-gray-700 hover:text-blue-500 px-4 py-2"
              >
                <CgProfile />
              </Link>
            </li>
            <li>
              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="text-gray-700 hover:text-blue-500 px-4 py-2"
              >
                <FaHeartCirclePlus />
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                aria-label="Cart"
                className="text-gray-700 hover:text-blue-500 px-4 py-2"
              >
                <IoIosCart />
              </Link>
            </li>
            <li>
              <Link
                href="/checkout"
                aria-label="Checkout"
                className="text-gray-700 hover:text-blue-500 px-4 py-2"
              >
                <IoBagCheckOutline />
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="inline-block mt-6 px-6 py-3 bg-[#6c4db47a] text-white border-spacing-8 border-4 border-[#2222] text-lg font-medium rounded-xl hover:bg-[#9373dd7a] transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
