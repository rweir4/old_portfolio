import React from 'react';
import Link from 'gatsby-link';

const NavBarRight = () => (
  <div id="nav-bar-right">
      <Link to="/">About</Link>
      <Link to="/coding">Coding</Link>
      <Link to="/writing/">Writing</Link>
      <Link to="/biochemistry/">Biochemistry</Link>
      <Link to="/blog/">Blog</Link>
  </div>
);

export default NavBarRight;
