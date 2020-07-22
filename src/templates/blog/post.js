import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import BlogPost from "../../sections/BlogPost";
import BlogPostFooter from "../../sections/BlogPostFooter";
import ShareLinks from "../../sections/ShareLinks";

import Spacing from "../../components/Spacing";
import Separator from "../../components/Separator";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";

import "./style.scss";

const PostTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date, slug },
      html,
    },
  },
}) => (
  <div className="PostTemplate">
    <Layout>
      <Meta />
      <BlogPost title={title} date={date} html={html} />

      <Spacing size="81" />

      <div className="PostTemplate-share">
        Share this blog post:
        <br />
        <ShareLinks slug={slug} />
      </div>

      <Separator />

      <BlogPostFooter />
    </Layout>
  </div>
);

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostTemplate;

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
