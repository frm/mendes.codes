import React from "react";

import "./style.scss";

export default ({ onClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleButton = () => setIsOpen(!isOpen);

  const clickAction = () => {
    onClick();
    toggleButton();
  };

  const modifier = isOpen ? "HamburgerMenu--open" : "";
  const className = `HamburgerMenu ${modifier}`;

  return (
    <span className={className} onClick={clickAction}>
      <span className="HamburgerMenu-line" />
      <span className="HamburgerMenu-line" />
      <span className="HamburgerMenu-line" />
    </span>
  );
};
