import React from "react";
import "./Navbar.css";
import routes from "../../Config/routes";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={process.env.PUBLIC_URL + "/vector.png"} alt="logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
        <li>
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
