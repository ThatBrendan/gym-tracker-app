"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 md:px-20 relative">
      <div className="basis-2/3 md:basis-1/3">
        <Link href="/">
          <p className="text-stone-500 text-2xl font-bold">Gym Tracker</p>
        </Link>
      </div>

      <ul className={"hidden md:flex md:basis-2/3 justify-between"}>
        <li className="mb-2 md:mb-0">
          <Link href="/">
            <p className="text-stone-500 hover:text-stone-700">Home</p>
          </Link>
        </li>
        <li className="mb-2 md:mb-0">
          <Link href="/tracker">
            <p className="text-stone-500 hover:text-stone-700">Tracker</p>
          </Link>
        </li>
        <li className="mb-2 md:mb-0">
          <Link href="/profile">
            <p className="text-stone-500 hover:text-stone-700">Profile</p>
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden text-stone-500 focus:outline-none basis-1/3"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-stone-50 p-4 z-50 transform transition-transform duration-300 md:hidden 
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="text-stone-500 text-4xl mb-8 "
          onClick={() => setMenuOpen(false)}
          aria-label="Close Navigation Menu"
        >
          &times;
        </button>

        {/* Mobile navigation links */}
        <ul className="flex flex-col">
          <li className="text-center mb-8">
            <Link href="/">
              <button
                className="text-stone-500 text-5xl focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </button>
            </Link>
          </li>
          <li className="text-center mb-8">
            <Link href="/tracker">
              <button
                className="text-stone-500 text-5xl focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                Tracker
              </button>
            </Link>
          </li>
          <li className="text-center mb-8">
            <Link href="/profile">
              <button
                className="text-stone-500 text-5xl focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
