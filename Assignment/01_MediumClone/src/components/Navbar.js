import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        <div className="text-2xl font-semibold">
          Medium
        </div>

        {/* Right - Links */}
        <div className="flex space-x-6 items-center">
          <a href="#our-story" className="text-gray-700 hover:text-black">Our story</a>
          <a href="#membership" className="text-gray-700 hover:text-black">Membership</a>
          <a href="#write" className="text-gray-700 hover:text-black">Write</a>
          <a href="#sign-in" className="text-gray-700 hover:text-black">Sign in</a>

          {/* Get started button */}
          <a href="#get-started" className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
