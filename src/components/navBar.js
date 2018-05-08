import React from 'react';
import Link from 'gatsby-link';
import WhiteLogo from '../../assets/images/rw-logo-white.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navClass: 'normal' };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 515 && this.state.navClass === 'dropdown') {
        this.setState({'navClass':'normal'});
      }
    });
  }

  toggleDropdown() {
    if (this.state.navClass === 'dropdown') {
      this.setState({'navClass':'normal'});
    } else {
      this.setState({'navClass':'dropdown'});
    }
  }

  render() {
    return (
      <div className={`nav-bar color-${this.props.background}`}>
        <img className="white-logo" src={WhiteLogo} />
        <div className={this.state.navClass}>
          <Link to="/">About</Link>
          <Link to="/coding">Coding</Link>
          <Link to="/writing/">Writing</Link>
          <Link to="/biochemistry/">Biochemistry</Link>
          <Link to="/blog/">Blog</Link>
        </div>
        <button className={`hide color-${this.props.hamburger}`} onClick={this.toggleDropdown}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    );
  }
}

export default NavBar;
