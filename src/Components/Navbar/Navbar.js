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
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation();
  const path = location.pathname


  const navLinks = [
    {
      name: "Home",
      icons: <HomeSharpIcon />,
      pathName: "/",
    },
    {
      name: "About",
      icons: <InfoSharpIcon />,
      pathName: "/about",
    },
    {
      name: "Products",
      icons: <CategorySharpIcon />,
      pathName: "/products",
    },
    {
      name: "Orders",
      icons: <BorderColorSharpIcon />,
      pathName: "/orders",
    },
  ]
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
          {navLinks.map((item, index) => {
            return (
              <div key={index}>
              <NavLink to={item.pathName}>{item.name}</NavLink>
              </div>
            )
          })}
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/orders">Orders</NavLink> */}
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
          {navLinks.map((link, indeks) => {
            return (
              <NavLink
              key={indeks}
            onClick={() => {
              setOpen(false)
            }}
            to={link.pathName}>{link.icons} {link.name}</NavLink>
            )
          })}
        </div>
      </Drawer>
    </>
  )
}
