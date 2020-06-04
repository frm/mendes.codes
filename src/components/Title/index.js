import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import Highlight from "../Highlight";

import "./style.scss";

export default () => {
  const location = useLocation();

  const verb =
    {
      "/": "codes",
      "/about": "is",
      "/open-source": "codes",
      "/talks": "talks",
    }[location.pathname] || "codes";

  return (
    <Link to="/">
      <h1 className="Title">
        <Highlight>{`mendes ${verb}`}</Highlight>
      </h1>
    </Link>
  );
};
