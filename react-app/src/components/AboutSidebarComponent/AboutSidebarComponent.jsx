import React, { Component } from 'react';
import avatar from '../../img/avatar.jpg'

import { css } from 'aphrodite/no-important';
import styles from './AboutSidebarStyle'

export default class AboutSidebarComponent extends Component {
  render() {
    return <div className={css(styles.wrapper)}>
      <img className={css(styles.img)} src={avatar} alt=""/>
      <div className={css(styles.text)}>
        <p>Hello!</p>
        <p>
          I’m Dimon, Ukrainian auto traveler, outdoor and lifestyle photographer, videographer, freelance graphic designer, adherent of a healthy lifestyle and sports, in love with new adventures and explore the great outdoors.
        </p>
        <p>
          Here is my space to share what I see and feel, so welcome!
        </p>
      </div>
      <div>
        <button>READ MORE</button>
      </div>
      <h3>Latest Instagram</h3>
      <div>
        <img className={css(styles.img)} src={avatar} alt=""/>
      </div>
    </div>
  }
}