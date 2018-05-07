import React from 'react'
import Link from 'gatsby-link'

const Header = ({ className, siteTitle }) => (
    <h1 className={className}>
        {siteTitle}
    </h1>
);

export default Header
