import React from "react";

import HamburgerMenu from "../HamburgerMenu";

import "./style.scss";

export default ({ children, className }) => {
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
