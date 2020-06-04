import React from "react";
import { ExternalNavLink, NavLink } from "../NavLink";
import Grid from "../Grid";
import Title from "../Title";
import MenuBar from "../MenuBar";
import ThemeChanger from "../ThemeChanger";

import "./style.scss";

export default () => (
  <nav className="Nav">
    <Grid>
      <div className="Nav-container">
        <div className="Nav-left">
          <Title />
        </div>

        <div className="Nav-right">
          <MenuBar className="Nav-menu">
            <div className="Nav-menuContent">
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

          <ThemeChanger className="Nav-themeChanger" />

          <div className="Nav-linkContainer">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/talks">Talks</NavLink>
            <ExternalNavLink to="https://blog.mendes.codes">
              Blog
            </ExternalNavLink>
          </div>
        </div>
      </div>
    </Grid>
  </nav>
);
