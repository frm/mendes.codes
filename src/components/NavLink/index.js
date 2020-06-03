import React from "react";
import { Link } from "gatsby";

import Highlight from "../Highlight";

import "./style.scss";

export const NavLink = ({ to, children, modifier }) => {
  const pathname = window.location.pathname;
  const classModifier =
    modifier === "alternative" ? "NavLink--alternative" : "";

  const className = `NavLink ${classModifier}`;

  if (to === pathname) {
    return (
      <Link to={to} className={className}>
        <Highlight modifier="strong">{children}</Highlight>
      </Link>
    );
  } else {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
};

export const ExternalNavLink = ({ to, children, modifier }) => {
  const pathname = window.location.pathname;
  const classModifier =
    modifier === "alternative" ? "NavLink--alternative" : "";

  const className = `NavLink ${classModifier}`;

  if (to === pathname) {
    return (
      <a href={to} className={className}>
        <Highlight type="strong">{children}</Highlight>
      </a>
    );
  } else {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
};
