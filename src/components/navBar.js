import React from 'react';
import Link from 'gatsby-link';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navClass: 'hide' };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    if (this.state.navClass === 'dropdown') {
      this.setState({'navClass':'hide'});
    } else {
      this.setState({'navClass':'dropdown'});
    }
  }

  render() {
    return (
      <div id="nav-bar">
        <div className={this.state.navClass}>
          <Link to="/">About</Link>
          <Link to="/coding">Coding</Link>
          <Link to="/writing/">Writing</Link>
          <Link to="/biochemistry/">Biochemistry</Link>
          <Link to="/blog/">Blog</Link>
        </div>
        <button className="hide" onClick={this.toggleDropdown}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    );
  }
}

export default NavBar;
