import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import './index.css';
import './home.css';
import './navBar.css';
import './footer.css';
import './coding.css';
import './biochemistry.css';
import './writing.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="{data.site.siteMetadata.title}"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
