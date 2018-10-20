import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import articles from './articles';
import photo from './photo'

export default combineReducers({
  routing: routerReducer,
  articles,
  photo,
})