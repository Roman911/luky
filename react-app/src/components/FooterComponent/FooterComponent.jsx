import React from 'react';
import DateTime from "../DateTime/DateTime";

import { css } from 'aphrodite/no-important';
import styles from './FooterStyle'

const FooterComponent = () => (
  <div className={css(styles.wrapper)}>
    <span>
      Made with love by Dmytro Lakiza. ©
    </span>
    <span>
      <DateTime format='YYYY'/>
    </span>
    <span>
      All rights Reserved.
    </span>
  </div>
);

export default FooterComponent