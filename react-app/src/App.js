import React from 'react';
import { connect } from 'react-redux';

const App = ({ state, ownProps }) => {
  console.log( state.articles, ownProps );
  return <div>123</div>
};

export default connect(
  (state, ownProps) => ({
    state,
    ownProps
  })
)(App)