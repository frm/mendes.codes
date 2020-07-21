import React from "react";
import PropTypes from "prop-types";

import PostLink from "../../components/PostLink";

const BlogIndex = ({ posts }) => {
  const Posts = posts.map(post => <PostLink key={post.id} post={post} />);

  return <div>{Posts}</div>;
};

BlogIndex.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogIndex;
