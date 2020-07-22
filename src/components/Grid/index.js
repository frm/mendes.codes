import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Grid = ({ children }) => {
  return (
    <div className="Grid">
      <div className="Grid-content">{children}</div>
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
