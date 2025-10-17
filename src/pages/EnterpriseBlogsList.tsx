import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar({ forceHomeRedirect = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const hrefOrLink = (children) =>
    forceHomeRedirect ? <Link to="/">{children}</Link> : children;

  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div>
            <img src="logo.svg" alt="Company logo" className="object-contain"/>
          </div>

          <div className="hidden md:flex space-x-8 text-gray-500 font-normal">
            {hrefOrLink(<a href="#home" className="hover:text-[#2F2E8B]">Home</a>)}
            {hrefOrLink(<a href="#features" className="hover:text-[#2F2E8B]">Product</a>)}
            {hrefOrLink(<a href="#faq" className="hover:text-[#2F2E8B]">FAQ</a>)}
            {hrefOrLink(<a href="#features" className="hover:text-[#2F2E8B]">Blog</a>)}
            {hrefOrLink(<a href="#about" className="hover:text-[#2F2E8B]">About Us</a>)}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {hrefOrLink(<Button variant="ghost" className="text-gray-400">Login</Button>)}
            {hrefOrLink(<Button className="btn-primary text-foreground hover:bg-[#262577] text-white">Sign Up</Button>)}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6 text-textPrimary" /> : <Menu className="w-6 h-6 text-textPrimary" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4 space-y-4">
            {hrefOrLink(<a href="#home" className="block text-gray-700 hover:text-[#2F2E8B]">Home</a>)}
            {hrefOrLink(<a href="#features" className="block text-gray-700 hover:text-[#2F2E8B]">Product</a>)}
            {hrefOrLink(<a href="#faq" className="block text-gray-700 hover:text-[#2F2E8B]">FAQ</a>)}
            {hrefOrLink(<a href="#about" className="block text-gray-700 hover:text-[#2F2E8B]">About Us</a>)}
            <div className="flex flex-col gap-3 pt-4 border-t">
              {hrefOrLink(<Button variant="ghost" className="text-textPrimary">Login</Button>)}
              {hrefOrLink(<Button className="bg-[#2F2E8B] hover:bg-[#262577] text-white">Sign Up</Button>)}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
