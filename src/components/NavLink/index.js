import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import Highlight from "../Highlight";

import "./style.scss";

const NavLink = ({ to, children, modifier }) => {
  const location = useLocation();
  const className = `NavLink NavLink--${modifier}`;

  if (to === location.pathname) {
    return (
      <Link to={to} className={className}>
        <Highlight modifier="strong">{children}</Highlight>
      </Link>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  modifier: PropTypes.string,
  to: PropTypes.string.isRequired,
};

NavLink.defaultProps = {
  modifier: "regular",
};

const ExternalNavLink = ({ to, children, modifier }) => {
  const location = useLocation();
  const className = `NavLink NavLink--${modifier}`;

  if (to === location.pathname) {
    return (
      <a href={to} className={className}>
        <Highlight type="strong">{children}</Highlight>
      </a>
    );
  }

  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

ExternalNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  modifier: PropTypes.string,
  to: PropTypes.string.isRequired,
};

ExternalNavLink.defaultProps = {
  modifier: "regular",
};

export { ExternalNavLink, NavLink };
