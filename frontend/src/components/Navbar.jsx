import React, { useState } from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full mt-3 z-50 mb-4">
      <div className=" mx-auto px-4 py-2 flex justify-between items-center">
        {/* <div>
          <img src="../logo.jpeg" alt="Logo" className="w-12 h-12 rounded-full" />
        </div> */}
        <div className="text-gray-200 flex text-3xl font-light">
        <img src="../logo.jpeg" alt="Logo" className="w-12 h-12 rounded-full" />
          <Link to="/" className=" ml-6">MediMind-AI</Link>
        </div>

        {/* Hamburger menu icon */}
        <div className="block md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-8 h-8 text-gray-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Main navigation links */}
        <ul className={`md:flex md:space-x-16 text-lg  text-gray-50 ${isMenuOpen ? "block" : "hidden"}`}>
          <CustomLink to="/explore" className="hover:text-green-900 hover:font-medium hover:rounded-full hover:bg-green-100 hover:p-1">Explore</CustomLink>
          <CustomLink to="/services" className="hover:text-green-900 hover:font-medium hover:rounded-full hover:bg-green-100 hover:p-1">Services</CustomLink>
          <CustomLink to="/" className="hover:text-green-900 hover:font-medium hover:rounded-full hover:bg-green-100 hover:p-1">Contact</CustomLink>
          <Link to="/register" className="hover:text-green-900 hover:font-medium hover:rounded-full hover:bg-green-100 hover:p-1">
            Sign in / Register
          </Link>
        </ul>
      </div>
    </nav>
  );

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
}
