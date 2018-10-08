import React from 'react';
import { NavLink } from 'react-router-dom';
import { navBarItems } from './navBarConfig';
import logo from '../../img/logo.jpg';

import {css} from 'aphrodite/no-important';
import baseStyle from './../../style/baseStyle'
import styles from './NavBarStyle'

const NavBarComponent = () => (
  <div className={css(styles.navBar)}>
    <div className={css(styles.img)}>
      <img src={logo} alt=""/>
    </div>
    <div className={css(baseStyle.wrapperM, styles.navBarWrapper)}>
      {navBarItems.map((item, index) =>
      <NavLink key={index} className={css(styles.link)} to={item.route}>
        { item.title }
      </NavLink>
    )}
    </div>
  </div>
);

export default NavBarComponent