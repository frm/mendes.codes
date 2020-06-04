import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Spacing = ({ size }) => <div className={`Spacing Spacing--${size}`} />;

Spacing.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Spacing;
