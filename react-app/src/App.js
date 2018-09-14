import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import AboutSidebarComponent from "./components/AboutSidebarComponent/AboutSidebarComponent";

import { css } from 'aphrodite/no-important';
import baseStyle from './style/baseStyle'
import AppStyle from './style/AppStyle'

export default class App extends Component {
  render() {
    return <Router>
      <div >
        <NavBarComponent height='300' />
        <div className={css(baseStyle.wrapper, AppStyle.wrapper)}>
          <Switch>
            <Route path='/home' render={() => <HomeComponent/>}/>
            <Redirect path='/' to='/home'/>
          </Switch>
          <AboutSidebarComponent/>
        </div>
        <FooterComponent />
      </div>
    </Router>;
  }
}