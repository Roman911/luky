import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from "react-router";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import './index.css';
import moment from 'moment';
import 'moment/locale/uk';
import createHistory from "history/createBrowserHistory";
import registerServiceWorker from './registerServiceWorker';

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import Home from "./containers/Home";
import AboutSidebarComponent from "./components/AboutSidebarComponent/AboutSidebarComponent";
import Speedway from "./containers/Speedway";
import Travel from "./containers/Travel";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import Post from "./containers/Post";

import { css } from "aphrodite";
import baseStyle from "./style/baseStyle";
import AppStyle from "./style/AppStyle";

moment.locale('uk');

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware)));

const post = ({ match }) => (
  <Post id={match.params.id} />
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Fragment>
        <NavBarComponent />
        <div className={css(baseStyle.wrapper, AppStyle.wrapper)}>
          <Fragment>
            <Route path='/home' render={() => <Home />} />
            <Route path='/speedway' render={() => <Speedway />}/>
            <Route path='/travel' render={() => <Travel />}/>
            <Route path='/about' render={() => <AboutComponent />}/>
            <Route path='/post/:id' component={ post }/>
          </Fragment>
          <AboutSidebarComponent/>
        </div>
        <FooterComponent />
      </Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();