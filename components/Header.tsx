"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-red-600 font-bold text-2xl hover:text-red-700 transition duration-300">
            BloodDonate
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-800 hover:text-red-600 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-red-600 transition duration-300">
              About
            </Link>
            <Link href="/donate" className="text-gray-800 hover:text-red-600 transition duration-300">
              Donate
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-red-600 transition duration-300">
              Contact
            </Link>
            <Link href="/login" className="text-gray-800 hover:text-red-600 transition duration-300">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-red-600 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 1 1 1.414-1.414l4.829 4.828 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block text-gray-800 hover:text-red-600 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="block text-gray-800 hover:text-red-600 transition duration-300">
              About
            </Link>
            <Link href="/donate" className="block text-gray-800 hover:text-red-600 transition duration-300">
              Donate
            </Link>
            <Link href="/contact" className="block text-gray-800 hover:text-red-600 transition duration-300">
              Contact
            </Link>
            <Link href="/login" className="block text-gray-800 hover:text-red-600 transition duration-300">
              Login
            </Link>
            <Link
              href="/signup"
              className="block bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 text-center"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
