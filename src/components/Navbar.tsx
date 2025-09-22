// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "/blog" },

  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-saas-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                Enterprise.AI
              </span>
            </NavLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* CTA / external */}
            {/* <a
              href="https://codescandy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button className="bg-saas-orange hover:bg-orange-600 text-black font-semibold">
                Get Template
              </Button>
            </a> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[800px]" : "max-h-0"
        }`}
      >
        <div className="bg-saas-darkGray px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium ${
                  isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="mt-4 px-3 pb-4">
            {/* <a
              href="https://codescandy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
              <Button className="w-full bg-saas-orange hover:bg-orange-600 text-black font-semibold">
                Get Template
              </Button>
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
