import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#161C28] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        
        {/* Column 1 */}
        <div>
          <div className="font-bold text-lg">
            <img src="/Footer_logo.svg" alt="Company logo" className="object-contain" />
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Get started now — try our product
          </p>

          {/* LinkedIn Icon */}
          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.linkedin.com/company/enterpriserm-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h5 className="font-semibold mb-3">Support</h5>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Help centre</li>
            <li>Account information</li>
            <li>About</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h5 className="font-semibold mb-3">Help and Solution</h5>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Talk to support</li>
            <li>Support docs</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h5 className="font-semibold mb-3">Product</h5>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Update</li>
            <li>Security</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 text-gray-400 text-sm">
        © 2025 EnterpriseRM.AI . All rights reserved.
      </div>
    </footer>
  );
}
