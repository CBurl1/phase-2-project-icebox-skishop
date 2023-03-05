import React from 'react'
import { NavLink } from 'react-router-dom'
function SubNavBar() {
  return (
    <div>
        <NavLink
        to="/storefront/skis"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Skis
      </NavLink>
      <NavLink
        to="/storefront/snowboards"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Snowboards
      </NavLink>
    </div>
  )
}

export default SubNavBar
