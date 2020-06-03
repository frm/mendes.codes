import React from "react";

import HamburgerMenu from "../HamburgerMenu";

import "./style.scss";

export default ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const modifier = modalIsOpen ? "MenuBar--open" : "";
  const className = `MenuBar ${modifier}`;

  return (
    <div className={className}>
      <div className="MenuBar-button">
        <HamburgerMenu onClick={toggleModal} />
      </div>

      <div className="MenuBar-modal">{children}</div>
    </div>
  );
};
