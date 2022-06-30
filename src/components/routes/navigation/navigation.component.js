import React from 'react';
import './navigation.styles.scss';

import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';

function Navigation() {
  return (
    <>
      <div className="navigation">

        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
