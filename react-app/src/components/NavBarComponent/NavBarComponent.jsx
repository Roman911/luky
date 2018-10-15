import React from 'react';
import { NavLink } from 'react-router-dom';
import { navBarItems } from './navBarConfig';
import logo from '../../img/logo.png';

import {css} from 'aphrodite/no-important';
import baseStyle from './../../style/baseStyle';
import styles from './NavBarStyle';
import btn from '../../style/buttons';

import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarComponent = () => (
  <div className={css(styles.navBar)}>
    <div className={css(styles.logo)}>
      <img className={css(styles.img)} src={logo} alt=""/>
    </div>
    <div className={css(baseStyle.wrapperM, styles.navBarWrapper)}>
      { navBarItems.map((item, index) =>
      <NavLink key={index} className={css(styles.link)} to={item.route}>
        { item.title }
      </NavLink>
    ) }
    <div className={css(styles.links)}>
      <a className={css(btn.icon, btn.iconI)} href="https://www.instagram.com/lakiza_dima/" target='__blank'>
        <FontAwesomeIcon icon={ faInstagram }/>
      </a>
      <a className={css(btn.icon, btn.iconF)} href="https://www.facebook.com/dima.lakiza.1" target='__blank'>
        <FontAwesomeIcon icon={ faFacebookF }/>
      </a>
    </div>
    </div>
  </div>
);

export default NavBarComponent