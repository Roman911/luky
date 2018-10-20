import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as photoActions from '../actions/photo';
import ShowedPhoto from "../components/ShowedPhotoComponent/ShowedPhotoComponent";

const mapStateToProps = ({ photo }) => ({
  showed: photo.showed,
  id: photo.idPhoto,
  photo: photo.photo
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(photoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowedPhoto);