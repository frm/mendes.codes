import React from "react"
import Grid from "../Grid"
import Nav from "../Nav"
import Spacing from "../Spacing"
import Footer from "../Footer"

import "./style.scss"

export default ({ children }) => {
  return (
    <div className="Layout">
      <div className="Layout-container">
        <div className="Layout-content">
          <Nav />

          <Grid>
            <Spacing size="36"/>
            <Spacing size="36"/>
            <Spacing size="36"/>

            {children}
          </Grid>
        </div>

        <div className="Layout-footer">
          <Grid>
            <Footer />
          </Grid>
        </div>
      </div>
    </div>
  )
}
