import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-black shadow-lg">
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-6 border-b border-gray-800">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <NavLink to="/" className="hover:text-yellow-300 transition">
            <img src={logo} alt="" width={120} />
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg mt-4 lg:mt-0 absolute bg-indigo-600 w-full top-12 left-0 p-5 z-50 lg:p-0 lg:w-auto lg:bg-transparent lg:static ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-medium"
                  : "hover:text-yellow-300 transition font-medium"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-medium"
                  : "hover:text-yellow-300 transition font-medium"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-medium"
                  : "hover:text-yellow-300 transition font-medium"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-medium"
                  : "hover:text-yellow-300 transition font-medium"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-medium"
                  : "hover:text-yellow-300 transition font-medium"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-500 text-gray-900 py-2 px-4 rounded font-medium"
                  : "bg-yellow-400 text-gray-700 py-2 px-4 rounded font-medium"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
