import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { navBarItems } from './navBarConfig';

import { css } from 'aphrodite/no-important';
import baseStyle from './../../style/baseStyle'
import styles from './NavBarStyle'

export default class NavBarComponent extends Component {
  render() {

    const links = navBarItems.map((item, index) => {
      return <NavLink
        key={index}
        className={css(styles.link)}
        to={item.route}><i className={item.class}
      />
        <p >
          {item.title}
        </p>
      </NavLink>;
    });

    return <div className={css(styles.navBar)}>
      <div className={css(styles.img)}>
        <img src="./img/logo.jpg" alt=""/>
      </div>
      <div className={css(baseStyle.wrapper, styles.navBarWrapper)}>
        {links}
      </div>
    </div>
  }
}