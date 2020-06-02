import React from "react"

import "./style.scss"

export default ({ type, children }) => {
  const modifier = type || "regular";
  const className = `Highlight Highlight--${modifier}`

  return <span className={className}>{children}</span>
}
