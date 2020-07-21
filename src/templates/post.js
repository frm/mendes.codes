import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

const Template = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) => (
  <div className="blog-post-container">
    <div className="blog-post">
      <h1>{title}</h1>
      <h2>{date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);

Template.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
