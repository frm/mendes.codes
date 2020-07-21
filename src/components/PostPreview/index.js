import React from "react";
import PropTypes from "prop-types";

import Spacing from "../Spacing";
import { Link } from "../Link";

import "./style.scss";

const PostPreview = ({ post: { slug, date, title, excerpt } }) => (
  <div className="PostPreview">
    <div className="PostPreview-title">
      <Link to={slug}>{title}</Link>
    </div>

    <Spacing size="7" />

    <div className="PostPreview-date">{date}</div>

    <Spacing size="16" />

    <div className="PostPreview-excerpt">{excerpt}</div>
  </div>
);

PostPreview.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;
