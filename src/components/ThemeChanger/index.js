import React from "react";
import PropTypes from "prop-types";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import { ReactComponent as BulbOn } from "./bulb-on.svg";
import { ReactComponent as BulbOff } from "./bulb-off.svg";

import "./style.scss";

const ThemeChanger = ({ className: extraClassName }) => {
  const toggleTheme = (theme, toggleFun) => {
    const target = theme === "light" ? "dark" : "light";

    toggleFun(target);
  };

  const themeIcon = theme => (theme === "light" ? <BulbOff /> : <BulbOn />);

  const className = `ThemeChanger ${extraClassName}`;

  return (
    <ThemeToggler>
      {({ theme, toggleTheme: toggleFun }) => (
        <div
          className={className}
          onClick={() => toggleTheme(theme, toggleFun)}
          onKeyPress={() => toggleTheme(theme, toggleFun)}
          role="button"
          tabIndex={0}
        >
          {themeIcon(theme)}
        </div>
      )}
    </ThemeToggler>
  );
};

ThemeChanger.propTypes = {
  className: PropTypes.string,
};

ThemeChanger.defaultProps = {
  className: "",
};

export default ThemeChanger;
