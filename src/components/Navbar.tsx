import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* ✅ Clickable logo that routes to homepage */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Company logo"
              className="object-contain cursor-pointer h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-500 font-normal">
            <a href="#home" className="hover:text-[#2F2E8B]">Home</a>
            <a href="#features" className="hover:text-[#2F2E8B]">Product</a>
            <a href="#faq" className="hover:text-[#2F2E8B]">FAQ</a>
            <Link to="/blogs" className="hover:text-[#2F2E8B]">Blog</Link>
            <a href="#about" className="hover:text-[#2F2E8B]">About Us</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-400">Login</Button>
            <Button className="btn-primary text-foreground hover:bg-[#262577] text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6 text-textPrimary" />
              ) : (
                <Menu className="w-6 h-6 text-textPrimary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-[#2F2E8B]">Home</a>
            <a href="#features" className="block text-gray-700 hover:text-[#2F2E8B]">Product</a>
            <a href="#faq" className="block text-gray-700 hover:text-[#2F2E8B]">FAQ</a>
            <Link to="/blogs" className="block text-gray-700 hover:text-[#2F2E8B]">Blog</Link>
            <a href="#about" className="block text-gray-700 hover:text-[#2F2E8B]">About Us</a>

            <div className="flex flex-col gap-3 pt-4 border-t">
              <Button variant="ghost" className="text-textPrimary">Login</Button>
              <Button className="bg-[#2F2E8B] hover:bg-[#262577] text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
