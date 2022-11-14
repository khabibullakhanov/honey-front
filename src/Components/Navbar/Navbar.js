import React from 'react'
import "./Navbar.css"
import yellowLogo from "../../Assets/Icons/Yellow Logo.svg"
import blackLogo from "../../Assets/Icons/black logo.svg"
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";


export function Navbar() {
  const location = useLocation();
  const path = location.pathname
  console.log(path);
  return (
    <div id='navbar-main-container'>
      <figure>
        <NavLink to="/">
          {path === "/" ? <img src={yellowLogo} alt="" /> : <img src={blackLogo} alt="" />}
        </NavLink>
      </figure>
      <div id='navbar-main-right-content'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Our Product</NavLink>
        <NavLink to="/contacts">Contact</NavLink>
      </div>
    </div>
  )
}
