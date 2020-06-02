import React from "react"
import { Link } from "gatsby"

import Highlight from "../Highlight"

import "./style.scss"

export const NavLink = ({ to, children }) => {
  const pathname = window.location.pathname;
  if (to === pathname ) {
    return (
      <Link to={to} className="NavLink"><Highlight type="strong">{children}</Highlight></Link>
    )
  } else {
    return <Link to={to} className="NavLink">{children}</Link>
  }
}

export const ExternalNavLink = ({ to, children }) => {
  const pathname = window.location.pathname;
  if (to === pathname ) {
    return (
      <a href={to} className="NavLink"><Highlight type="strong">{children}</Highlight></a>
    )
  } else {
    return <a href={to} className="NavLink">{children}</a>
  }
}
