import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const HamburgerMenu = ({ onClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleButton = () => setIsOpen(!isOpen);

  const clickAction = () => {
    onClick();
    toggleButton();
  };

  const modifier = isOpen ? "HamburgerMenu--open" : "";
  const className = `HamburgerMenu ${modifier}`;

  return (
    <span
      className={className}
      onKeyPress={clickAction}
      onClick={clickAction}
      tabIndex={0}
      role="button"
    >
      <span className="HamburgerMenu-line" />
      <span className="HamburgerMenu-line" />
      <span className="HamburgerMenu-line" />
    </span>
  );
};

HamburgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HamburgerMenu;
