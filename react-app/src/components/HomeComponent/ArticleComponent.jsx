import React, {Fragment} from 'react';
import DateTime from "../DateTime/DateTime";

import {css} from 'aphrodite/no-important';
import styles from './ArticleStyle'

const ArticleComponent = ({title, img, text, date}) => (
  <Fragment>
    <div className={css(styles.top)}>
      <h3 className={css(styles.timeline)}>{title}</h3>
      <DateTime value={ date } format='DD MMMM YYYY'/>
    </div>
    <img className={css(styles.img)} src={img} alt=""/>
    <p className={css(styles.text)}>{text}</p>
  </Fragment>
);

export default ArticleComponent;