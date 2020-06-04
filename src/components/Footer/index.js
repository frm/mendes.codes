import React from "react";
import Highlight from "../Highlight";

import "./style.scss";

export default () => (
  <footer className="Footer">
    <p>
      &copy; {new Date().getFullYear()}{" "}
      <Highlight type="strong">Fernando Mendes</Highlight>
    </p>
  </footer>
);
