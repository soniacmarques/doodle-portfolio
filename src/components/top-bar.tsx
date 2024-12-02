"use client"; // Ensures it's a client-side component

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { themeChange } from "theme-change";

export default function TopBar() {
  // State for current theme
  const [currentTheme, setCurrentTheme] = useState("my_light_pastel");

  useEffect(() => {
    // Initialize theme-change only in the browser
    themeChange(false);

    // On page load, set the current theme from the browser (if available)
    const savedTheme = localStorage.getItem("theme") || "my_light_pastel";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    // Determine the next theme
    const nextTheme = currentTheme === "my_light_pastel" ? "my_dark_pastel" : "my_light_pastel";

    // Update the current theme
    setCurrentTheme(nextTheme);

    // Set the theme-change data attribute
    document.documentElement.setAttribute("data-theme", nextTheme);

    // Save the theme in localStorage
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <header className="bg-secondary wavy-box h-40 p-5" >
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold flex-shrink-0 flex items-center">
          <Link href="/" className="hover:text-primary ml-9">
            My Portfolio
          </Link>
          
        </div>
        
        {/* Navigation */}
        <div className="md:flex items-center space-x-8">
          <Link href="/about" className="btn hover:text-primary">
            About Me
          </Link>
          <Link href="/portfolio" className="btn hover:text-primary">
            Portfolio
          </Link>
          
          <Link href="/contact" className="btn hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Theme Switcher */}
        <div className="md:flex items-center mr-16">
          <div
            className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer flex items-center"
            onClick={toggleTheme}
          >
            {/* Slider Knob */}
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                currentTheme === "my_dark_pastel" ? "translate-x-6" : ""
              }`}
            ></div>
            {/* Sun Icon */}
            <div
              className={`absolute left-2 text-yellow-500 text-sm transition-opacity ${
                currentTheme === "my_dark_pastel" ? "opacity-0" : "opacity-100"
              }`}
            >
              <FaRegSun />
            </div>
            {/* Moon Icon */}
            <div
              className={`absolute right-2 text-gray-900 dark:text-gray-700 text-sm transition-opacity ${
                currentTheme === "my_dark_pastel" ? "opacity-100" : "opacity-0"
              }`}
            >
              <FaRegMoon />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
