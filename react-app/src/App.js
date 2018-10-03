import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import Home  from "./containers/Home";
import Post from "./containers/Post";
import AboutSidebarComponent from "./components/AboutSidebarComponent/AboutSidebarComponent";

import { css } from 'aphrodite/no-important';
import baseStyle from './style/baseStyle'
import AppStyle from './style/AppStyle'

class App extends Component {
  render() {
    return <Router>
      <div >
        <NavBarComponent height='300' />
        <div className={css(baseStyle.wrapper, AppStyle.wrapper)}>
          <Switch>
            <Route path='/home' render={() => <Home />}/>
            <Route path='/post' render={() => <Post />}/>
            <Redirect path='/' to='/home'/>
          </Switch>
          <AboutSidebarComponent/>
        </div>
        <FooterComponent />
      </div>
    </Router>;
  }
}

export default App