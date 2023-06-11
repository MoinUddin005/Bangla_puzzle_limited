/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full px-2 py-4 bg-sky-800 sm:px-4 shadow-xl">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-bold text-lg">
                <Link to="/about">About</Link>
              </li>
              <li>
                <a className="font-bold text-lg">Event</a>
              </li>
              <li>
                <a className="text-white font-bold text-lg">News</a>
              </li>
              <li>
                <a className="text-white font-bold text-lg">Media</a>
              </li>
              <li>
                <a className="text-white font-bold text-lg">Gallery</a>
              </li>

              <li>
                <a className="text-white font-bold text-lg border-2">Contact</a>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            <img
              className="h-14"
              src="/public/images/logo/logot.png"
              alt=""
            />
            <h1 className="text-white font-bold">
              Anjir <br /> Liton
            </h1>
            <p className="text-white text-sm tracking-widest italic ">
              children's <br /> writter
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-white font-bold text-lg" to="/about">
                About
              </Link>
            </li>
            <li>
              <a className="text-white font-bold text-lg">Event</a>
            </li>
            <li>
              <a className="text-white font-bold text-lg">News</a>
            </li>
            <li>
              <a className="text-white font-bold text-lg">Media</a>
            </li>
            <li>
              <a className="text-white font-bold text-lg">Gallery</a>
            </li>

            <li>
              <a className="text-white font-bold text-lg border-2">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
