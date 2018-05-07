import React from 'react';
import Link from 'gatsby-link';
import NavBarRight from '../components/navBarRight';

const BlogPage = () => (
  <div>
    <NavBarRight />
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/">Go Home</Link>
  </div>
)

export default BlogPage
