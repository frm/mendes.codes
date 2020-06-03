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
              <ExternalNavLink
                modifier="alternative"
                to="https://blog.mendes.codes"
              >
                Blog
              </ExternalNavLink>
              <NavLink to="/talks" modifier="alternative">
                Talks
              </NavLink>
              <NavLink to="/about" modifier="alternative">
                About
              </NavLink>
              <NavLink to="/contact" modifier="alternative">
                Contact
              </NavLink>
            </div>
          </MenuBar>
          <Title />
        </div>
        <div className="Nav-right">
          <ExternalNavLink to="https://blog.mendes.codes">Blog</ExternalNavLink>
          <NavLink to="/talks">Talks</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </Grid>
  </nav>
);
