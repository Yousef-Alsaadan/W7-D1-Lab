import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            Rick and Morty
          </Link>
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={props.ser}
                onChange={(e) => props.setSer(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>

        <div className="navbar-end">
          <Link to="/add" className="btn btn-primary">
            Add character
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
