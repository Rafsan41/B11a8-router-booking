import React from "react";
import logo from "./../../../src/assets/logo.png";
import { NavLink } from "react-router";
import "./NavBar.css";
const NavBar = () => {
  const links = (
    <>
      <li className="px-5 text-2xl font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="px-5 text-2xl font-semibold">
        <NavLink to="/mybookings">My-Bookings</NavLink>
      </li>
      <li className="px-5 text-2xl font-semibold">
        <NavLink to="/blogs">Blogs</NavLink>{" "}
      </li>
      <li className="px-5 text-2xl font-semibold">
        <NavLink to="/contactus">Contact Us </NavLink>{" "}
      </li>
    </>
  );

  return (
    <div>
      <div className="fixed top-0 z-10 w-11/12 ">
        <div className="navbar   bg-white text-black shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu bg-blue-400 menu-xl dropdown-content  rounded-box z-1 mt-3 w-52 p-2  shadow"
              >
                {/* -----------------------------------*/}

                {links}
              </ul>
            </div>
            <img className="ml-10 w-16 h-16 " src={logo} alt="" />
            <a className=" text-3xl font-bold"> Justice Bangladesh</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* -------------------------------------*/}
              {links}
            </ul>
          </div>
          <div className="navbar-end mr-10">
            <a className="btn bg-[#0EA106] rounded-full border-0 text-xl font-semibold py-6 px-7">
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
