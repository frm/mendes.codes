import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";

const PostLink = ({
  post: {
    frontmatter: { slug, date, title },
  },
}) => (
  <div>
    <Link to={slug}>
      {title} ({date})
    </Link>
  </div>
);

PostLink.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostLink;
