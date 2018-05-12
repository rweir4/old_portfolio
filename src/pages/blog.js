import React from 'react';
import Link from 'gatsby-link';
import NavBar from '../components/navBar';

const BlogPage = ({ data }) => (
  <div id="writing">
    <NavBar />
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <g.H3 marginBottom={rhythm(1 / 4)}>
          {node.frontmatter.title}{" "}
          <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
        </g.H3>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </div>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;


export default BlogPage;
