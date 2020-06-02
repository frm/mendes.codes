import React from "react"
import Highlight from "../Highlight"

import "./style.scss"

export default ({ children }) => (
  <h1 className="Title"><Highlight>{children}</Highlight></h1>
)
