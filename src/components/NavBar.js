import React from 'react'
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/storefront"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Storefront
      </NavLink>
      
    </div>
  )
}

export default NavBar