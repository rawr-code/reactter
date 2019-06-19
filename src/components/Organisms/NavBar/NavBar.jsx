import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.scss';

// Icons
import { Home, Hash, Bell, Mail } from 'react-feather';

// Logo
import logo from '../../../images/logo.svg';

// Atoms
import { Icon } from '../../Atoms';

const NavBar = ({ location: { pathname } }) => {
  const activeClass = 'navbar__content__nav--selected';
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <span>Reactter</span>
      </div>
      <div className="navbar__content-wrapper">
        <div className="navbar__content">
          <nav className="navbar__content__nav">
            <Link to="/" className={pathname === '/' ? activeClass : ''}>
              <Icon>
                <Home />
              </Icon>
            </Link>
            <Link
              to="/explore"
              className={pathname === '/explore' ? activeClass : ''}>
              <Icon>
                <Hash />
              </Icon>
            </Link>
            <Link
              to="/notifications"
              className={pathname === '/notifications' ? activeClass : ''}>
              <Icon>
                <Bell />
              </Icon>
            </Link>
            <Link
              to="/messages"
              className={pathname === '/messages' ? activeClass : ''}>
              <Icon>
                <Mail />
              </Icon>
            </Link>
          </nav>
          <div className="navbar__content__userinfo">
            <img
              alt="user-img"
              src="https://pbs.twimg.com/profile_images/1023303162122387456/RjVJbJVf_normal.jpg"
            />
            <span>Emmanuel Vilegas</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(NavBar);
