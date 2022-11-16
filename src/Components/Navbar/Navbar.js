import React, { useState } from 'react'
import "./Navbar.css"
import yellowLogo from "../../Assets/Icons/Yellow Logo.svg"
import blackLogo from "../../Assets/Icons/black logo.svg"
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation();
  const path = location.pathname
  return (
    <>
      <div
        style={location.pathname !== "/" ? { background: "#FFA638" } : {}}
        id='navbar-main-container'>
        <figure>
          <NavLink to="/">
            {path === "/" ? <img src={yellowLogo} alt="" /> : <img src={blackLogo} alt="" />}
          </NavLink>
        </figure>
        <div id='navbar-main-right-content'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Our Product</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <IconButton id='navbar-menu-icon'
            onClick={() => {
              setOpen(true)
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      <Drawer
        anchor="right"
        id="drawer"
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
      >
        <div id="close-appabr-navbar-div">
          <CloseIcon
            onClick={() => {
              setOpen(false)
            }}
            id="close-appbar-navbar"
          />
        </div>
        <div className="drawer">
          <NavLink
            onClick={() => {
              setOpen(false)
            }}
            to="/">Home</NavLink>
          <NavLink
            onClick={() => {
              setOpen(false)
            }}
            to="/about">About</NavLink>
          <NavLink
            onClick={() => {
              setOpen(false)
            }}
            to="/products">Our Product</NavLink>
          <NavLink
            onClick={() => {
              setOpen(false)
            }}
            to="/contacts">Contact</NavLink>
        </div>
      </Drawer>
    </>
  )
}
