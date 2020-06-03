import React from "react";
import { ExternalNavLink, NavLink } from "../NavLink";
import Grid from "../Grid";
import Title from "../Title";
import MenuBar from "../MenuBar";

import "./style.scss";

export default () => (
  <nav className="Nav">
    <Grid>
      <div className="Nav-container">
        <div className="Nav-left">
          <MenuBar>
            <div className="Nav-menu">
              <NavLink to="/about" modifier="alternative">
                About
              </NavLink>
              <NavLink to="/talks" modifier="alternative">
                Talks
              </NavLink>
              <ExternalNavLink
                modifier="alternative"
                to="https://blog.mendes.codes"
              >
                Blog
              </ExternalNavLink>
            </div>
          </MenuBar>
          <Title />
        </div>
        <div className="Nav-right">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/talks">Talks</NavLink>
          <ExternalNavLink to="https://blog.mendes.codes">Blog</ExternalNavLink>
        </div>
      </div>
    </Grid>
  </nav>
);
