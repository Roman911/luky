import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articlesActions from '../actions/articles';
import * as photoActions from '../actions/photo';
import Post from '../components/PostComponent/PostComponent';

const mapStateToProps = ({ articles, photo }, ownProps ) => ({
  articles: articles.items,
  id: articles.idItems,
  post: Number(ownProps.id),
  idPhoto: photo.idPhoto,
  photo: photo.photo,
  showed: photo.showed
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(articlesActions, dispatch),
  ...bindActionCreators(photoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
