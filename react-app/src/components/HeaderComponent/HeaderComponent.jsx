import React from 'react';

import { css } from 'aphrodite/no-important';
import styles from './HeaderStyle';
import btn from '../../style/buttons'

const HeaderComponent = ({ title, img, tag }) => (
  <div style={{ backgroundImage: `url(${ img })` }} className={css(styles.wrapper)}>
    <div>
      <h2 className={css(styles.title)}>{ title }</h2>
      { tag.map((item, index) => {
        return <span key={index} className={css(btn.tag)}>
        { item }
      </span>
      })}
    </div>
    <div className={css(styles.block)}>
      <p>популярні</p>
    </div>
  </div>
);

export default HeaderComponent