import React from "react";
import PropTypes from "prop-types";

import HamburgerMenu from "../HamburgerMenu";

import "./style.scss";

const MenuBar = ({ children, className }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const modifier = modalIsOpen ? "MenuBar--open" : "";
  const menubarClassName = `MenuBar ${modifier} ${className}`;

  return (
    <div className={menubarClassName}>
      <div className="MenuBar-button">
        <HamburgerMenu onClick={toggleModal} />
      </div>

      <div className="MenuBar-modal">{children}</div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MenuBar.defaultProps = {
  className: "",
};

export default MenuBar;
