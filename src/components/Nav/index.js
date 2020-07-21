import React from "react";
import { NavLink } from "../NavLink";
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
              <NavLink modifier="alternative" to="/blog">
                Blog
              </NavLink>
            </div>
          </MenuBar>

          <ThemeChanger className="Nav-themeChanger" />

          <div className="Nav-linkContainer">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/talks">Talks</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
        </div>
      </div>
    </Grid>
  </nav>
);
