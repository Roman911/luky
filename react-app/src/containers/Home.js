import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articlesActions from '../actions/articles';
import Home from '../components/HomeComponent/HomeComponent';

const mapStateToProps = ({ articles }) => ({
  articles: articles.items,
  id: articles.idItems
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(articlesActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
