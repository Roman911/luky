import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {Route, Switch, HashRouter as Router, NavLink} from 'react-router-dom';

import { css } from 'aphrodite/no-important';
import styles from './SpeedwayStyle'

class SpeedwayComponent extends Component {
  render() {
    return <Router>
      <div className={css(styles.wrapper)}>
        <div className={css(styles.top)}>
          <NavLink className={css(styles.link)} to={'/speedway/news'}>
            news
          </NavLink>
          <NavLink className={css(styles.link)} to={'/speedway/calendar'}>
            calendar
          </NavLink>
        </div>
        <Switch>
          <Route path='/speedway/news' render={() => 123}/>
          <Route path='/speedway/calendar' render={() => 124}/>
          <Redirect path='/' to='/speedway/news'/>
        </Switch>
      </div>
    </Router>
  }
}

export default SpeedwayComponent