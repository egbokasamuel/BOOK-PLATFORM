import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ARCH PUBLISHING</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/self-publishing" className="hover:text-gray-300">
              Self Publishing
            </Link>
          </li>
          <li>
            <Link to="/help-centre" className="hover:text-gray-300">
              Help Centre
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">
              My Dashboard
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
