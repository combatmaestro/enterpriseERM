import React from "react";

export default function Footer(){
  return (
    <footer className="bg-[#161C28] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <div className="font-bold text-lg">
              <img src="Footer_logo.svg" alt="Company logo" className="object-contain"/>
          </div>
          <p className="text-sm text-gray-300 mt-4">Get started now — try our product</p>
          <div className="mt-4">
            <input className="rounded-full bg-transparent border border-gray-400 px-4 py-2 w-full text-white" placeholder="Enter your email here" />
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Support</h5>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Help centre</li>
            <li>Account information</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Help and Solution</h5>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Talk to support</li>
            <li>Support docs</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Product</h5>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Update</li>
            <li>Security</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 text-gray-400 text-sm">© 2025 EnterpriseRM.AI Inc. All rights reserved.</div>
    </footer>
  );
}
