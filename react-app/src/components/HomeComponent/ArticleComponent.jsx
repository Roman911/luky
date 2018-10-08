import React from 'react';
import { NavLink } from 'react-router-dom';
import DateTime from "../DateTime/DateTime";

import {css} from 'aphrodite/no-important';
import styles from './ArticleStyle'

const ArticleComponent = ({ title, img, text, tag, date, id, handleClick }) => (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.top)}>
        <NavLink className={css(styles.link)} to='/post'>
          <h3 className={css(styles.timeline)}>{title}</h3>
        </NavLink>
        <div className={css(styles.date)}>
          <DateTime value={date} format='DD MMMM YYYY'/>
        </div>
      </div>
      <img className={css(styles.img)} src={img} alt=""/>
      <p className={css(styles.text)}>{text}</p>
      <div className={css(styles.content)}>
        <div>
          {tag.map((item, index) => {
            return <span className={css(styles.tag)} key={index}>
              {item}
          </span>
          })}
        </div>
        <div>
          like
        </div>
      </div>
      <div className={css(styles.btnContent)}>
        <NavLink to={`/post/${ id }`}>
          <button onClick={handleClick.bind(this, id)} className={css(styles.btn)}>
            Continue reading
          </button>
        </NavLink>
      </div>
    </div>
);

export default ArticleComponent;