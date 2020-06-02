import React from "react"

import "./style.scss"

export default ({ children }) => {
  return (
    <div className="Grid">
      <div className="Grid-content">
        {children}
      </div>
    </div>
  )
}
