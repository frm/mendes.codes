import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import { ReactComponent as BulbOn } from "./bulb-on.svg";
import { ReactComponent as BulbOff } from "./bulb-off.svg";

import "./style.scss";

const ThemeChanger = ({ className: extraClassName }) => {
  const toggleTheme = (theme, toggleFun) => {
    const target = theme === "light" ? "dark" : "light";
    toggleFun(target);
  };

  const themeIcon = (theme) => (theme === "light" ? <BulbOff /> : <BulbOn />);

  const className = `ThemeChanger ${extraClassName}`;

  return (
    <div className={className}>
      <ThemeToggler>
        {({ theme, toggleTheme: toggleFun }) => (
          <div onClick={() => toggleTheme(theme, toggleFun)}>
            {themeIcon(theme)}
          </div>
        )}
      </ThemeToggler>
    </div>
  );
};

export default ThemeChanger;

