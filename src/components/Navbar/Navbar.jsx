import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const links = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink>Listed Books</NavLink></li>
  <li><NavLink>Pages to Read</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100 my-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-3xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-2 menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <NavLink className='btn bg-[#23BE0A] text-white text-lg'>Sign In</NavLink>
        <NavLink className='btn bg-[#59C6D2] text-white text-lg'>Sign Up</NavLink>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
