import React from 'react'
import { NavLink } from "react-router-dom";
function StoreNavBar() {
  return (
    <div>
        <NavLink
        to="/snowboard"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Snowboard
      </NavLink>
      <NavLink
        to="/ski"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Ski
      </NavLink>
    </div>
  )
}

export default StoreNavBar
