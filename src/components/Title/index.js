import React from "react";
import { Link } from "gatsby";

import Highlight from "../Highlight";

import "./style.scss";

export default () => {
  const verb =
    {
      "/": "codes",
      "/about": "is",
      "/open-source": "codes",
      "/talks": "talks",
    }[window.location.pathname] || "codes";

  return (
    <Link to="/">
      <h1 className="Title">
        <Highlight>{`mendes ${verb}`}</Highlight>
      </h1>
    </Link>
  );
};
