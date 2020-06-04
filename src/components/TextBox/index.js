import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const TextBox = ({ children }) => <div className="TextBox">{children}</div>;

TextBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextBox;
