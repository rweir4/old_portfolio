import React from 'react';
import Link from 'gatsby-link';
import NavBar from '../components/navBar';

const BlogPage = () => (
  <div>
    <NavBar />
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/">Go Home</Link>
  </div>
)

export default BlogPage
