import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Title */}
        <div className="text-white text-2xl font-bold">
          <a href="/">CBT-TEST</a>
        </div>

        {/* Navbar Links */}
        <div className="space-x-4">
          <Link to={'/register'}><button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-200">
            Register
          </button></Link>
          <Link to={'/login'}><button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-200">
            Login
          </button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;