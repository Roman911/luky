import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { css } from 'aphrodite/no-important';
import styles from './ShowedPhotoStyle';
import btn from '../../style/buttons';

import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShowedPhotoComponent extends Component {
  state = {
    currentIndex: this.props.id
  };

  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
    this.props.showed === true ? document.body.style.overflow = 'hidden' : ''
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
    document.body.style.overflow = '';
  }

  close() {
    const { removeShowed } = this.props;
    removeShowed( false );

  }

  next() {
    const photo = this.props.photo.photo.length;
    if (this.state.currentIndex < photo - 1) {
      this.setState({currentIndex: this.state.currentIndex + 1})
    }
    else {
      this.setState({currentIndex: 0})
    }
  }

  prev() {
    const photo = this.props.photo.photo.length;
    if (this.state.currentIndex > 0) {
      this.setState({currentIndex: this.state.currentIndex - 1})
    }
    else {
      this.setState({currentIndex: photo - 1})
    }
  }

  render() {
    const photo = this.props.photo.photo;
    const img = photo.map((item, index) => {
      let img = this.state.currentIndex === index ? <img className={css(styles.img)} key={index} src={`imgDesctop${item}`} alt="" /> : ' ';
      return img
    });
    return ReactDOM.createPortal(
      <div className={css(styles.bg)} >
        <button className={css(btn.close)} onClick={this.close.bind(this)}>
          <FontAwesomeIcon icon={ faTimes }/>
        </button>
        <div className={css(styles.block)}>
          { img }
          <button className={css(btn.control, btn.controlLeft)} onClick={this.prev.bind(this)}>
            <FontAwesomeIcon icon={ faChevronLeft }/>
          </button>
          <button className={css(btn.control, btn.controlRight)} onClick={this.next.bind(this)}>
            <FontAwesomeIcon icon={ faChevronRight }/>
          </button>
        </div>
      </div>,
      this.root
    );
  }
}

export default ShowedPhotoComponent