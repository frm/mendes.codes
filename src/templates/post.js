import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import BlogPost from "../components/BlogPost";

import Layout from "../components/Layout";
import Meta from "../components/Meta";

const Template = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) => (
  <div>
    <Layout>
      <Meta />
      <BlogPost title={title} date={date} html={html} />
    </Layout>
  </div>
);

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
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
