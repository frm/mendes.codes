import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

import "./style.scss";

const Link = ({ to, children }) => (
  <GatsbyLink to={to} className="Link">
    {children}
  </GatsbyLink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ExternalLink = ({ to, children }) => (
  <a href={to} className="Link">
    {children}
  </a>
);

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { ExternalLink, Link };
