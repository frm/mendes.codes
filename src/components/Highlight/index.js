import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Highlight = ({ type, children }) => {
  const className = `Highlight Highlight--${type}`;

  return <span className={className}>{children}</span>;
};

Highlight.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Highlight.defaultProps = {
  type: "regular",
};

export default Highlight;
