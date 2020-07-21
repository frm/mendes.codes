import React from "react";
import PropTypes from "prop-types";

import Spacing from "../Spacing";

import "./style.scss";

const BlogPost = ({ html, title, date }) => (
  <div className="BlogPost">
    <div className="BlogPost-container">
      <h1 className="BlogPost-title">{title}</h1>

      <Spacing size="11" />

      <span className="BlogPost-date">{date}</span>

      <Spacing size="54" />
      <Spacing size="36" />

      <div
        className="BlogPost-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);

BlogPost.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default BlogPost;
