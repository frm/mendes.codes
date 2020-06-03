import React from "react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";

import Landing from "../sections/Landing";

export default () => (
  <Layout>
    <Meta />
    <Landing />
  </Layout>
);

// const IndexPage = ({
//   data: {
//     allMarkdownRemark: { edges },
//   },
// }) => {

// const Posts = edges
//   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
//   .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
//
// export default IndexPage
// export const pageQuery = graphql`
//   query indexPageQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             path
//             title
//             thumbnail
//           }
//         }
//       }
//     }
//   }
// `
