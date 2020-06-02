import React from "react"
import Grid from "../Grid"
import Nav from "../Nav"
import Empty from "../Empty"
import Footer from "../Footer"

import "./style.scss"

export default ({ children }) => {
  return (
    <div className="Layout">
      <div className="Layout-container">
        <div className="Layout-content">
          <Nav />

          <Grid>
            <Empty size="36"/>
            <Empty size="36"/>
            <Empty size="36"/>

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
