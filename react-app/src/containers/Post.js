import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articlesActions from '../actions/articles';
import Post from '../components/PostComponent/PostComponent';

const mapStateToProps = ({ articles }, ownProps ) => ({
  articles: articles.items,
  id: articles.idItems,
  post: Number(ownProps.id)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(articlesActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
