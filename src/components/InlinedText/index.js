import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const InlinedText = ({ children }) => (
  <span className="InlinedText">{children}</span>
);

InlinedText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InlinedText;
