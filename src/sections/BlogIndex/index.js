import React from "react";
import PropTypes from "prop-types";

import Separator from "../../components/Separator";
import Spacing from "../../components/Spacing";
import PostPreview from "../../components/PostPreview";

import "./style.scss";

const BlogIndex = ({ posts }) => {
  const Posts = posts.map(({ id, frontmatter }) => (
    <div className="BlogIndex-entry" key={id}>
      <PostPreview post={frontmatter} />
      <Spacing size="54" />

      <Separator />

      <Spacing size="54" />
    </div>
  ));

  return <div className="BlogIndex">{Posts}</div>;
};

BlogIndex.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogIndex;
