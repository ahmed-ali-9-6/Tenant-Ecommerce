/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="flex flex-col w-64 px-5 h-screen py-8 bg-[#151529] border-r dark:bg-gray-900 dark:border-gray-700">
      <div>
        <a href="#">
          <img
            className="w-auto h-7"
            src="https://merakiui.com/images/logo.svg"
            alt="Logo"
          />
        </a>
      </div>

      <div className="flex flex-col flex-1 mt-6">
        <nav className="space-y-3">
          <Link
            to="/"
            className="flex items-center px-3 py-2 text-gray-400 hover:text-gray-300 dark:hover:bg-gray-800 rounded-lg cursor-pointer"
          >
            <span className="mx-2 text-sm font-medium">Home</span>
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center w-full px-3 py-2 text-gray-400 hover:text-gray-300 dark:hover:bg-gray-800 rounded-lg"
            >
              <span className="mx-2 text-sm font-medium">Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-4 h-4 ml-auto transition-transform ${
                  isDropdownOpen ? "rotate-90" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isDropdownOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="mt-2 space-y-2 pl-6">
                <a className="block px-2 py-1 text-sm text-gray-400 dark:text-gray-300 hover:text-gray-300 dark:hover:bg-gray-800 rounded-lg">
                  Project 1
                </a>
                <a className="block px-2 py-1 text-sm text-gray-400 dark:text-gray-300 hover:text-gray-300 dark:hover:bg-gray-800 rounded-lg">
                  Project 2
                </a>
                <a className="block px-2 py-1 text-sm text-gray-400 dark:text-gray-300 hover:text-gray-300 dark:hover:bg-gray-800 rounded-lg">
                  Project 3
                </a>
              </div>
            </div>
          </div>

          <a className="flex items-center px-3 py-2 text-gray-400 hover:text-gray-300 dark:hover:bg-gray-800 rounded-lg">
            <span className="mx-2 text-sm font-medium">Tasks</span>
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
