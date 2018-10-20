import React, {Component, Fragment} from 'react';
import axios from "axios";
import DateTime from "../DateTime/DateTime";
import CommentaryComponent from "../CommentaryComponent/CommentaryComponent";
import ShowedPhoto from "../../containers/ShowedPhoto";

import {css} from 'aphrodite/no-important';
import styles from './PostStyle';
import btn from '../../style/buttons'

class PostComponent extends Component {
  state = {
    post: null
  };

  componentWillMount() {
    const post = this.props.post;
    const { setPhoto } = this.props;
    axios.get(`./${post}.json`).then(({ data }) => {
      this.setState({ post: data });
      data.forEach((item) => {
        setPhoto({ photo: item.images })
      })
    })
  }

  handleClick(id) {
    const { setIdPhoto } = this.props;
    const { setShowed } = this.props;
    setShowed( true );
    setIdPhoto( id )
  }

  render() {
    const post = this.state.post;
    const title = !post ? 'loading' : post.map((item, index) => {
      return <Fragment key={index}>
        <h3 className={css(styles.title)}>{item.title}</h3>
      </Fragment>
    });
    const date = !post ? 'loading' : post.map((item, index) => {
      return <Fragment key={index}>
        <DateTime value={item.date} format='DD MMMM YYYY'/>
      </Fragment>
    });
    const tag = !post ? ' ' : post.map((item, index) => {
      return <div className={css(btn.tagContent)} key={index}>
        { item.tag.map((item, index) => {
        return <span key={index} className={css(btn.tag)}>
        { item }
        </span>
      }) }
      </div>
    });
    const postTop = !post ? ' ' : post.map((item, index) => {
      return <Fragment key={index}>
        <img className={css(styles.img)} src={ item.img.img } alt="" onClick={this.handleClick.bind(this, item.img.id)}/>
        <p className={css(styles.text)}>{ item.text }</p>
      </Fragment>
    });
    const postMain = !post ? 'lod' : post.map((item, index) => {
      return <Fragment key={index}>
        { item.post.map((item, index) => {
          let styleImg = item.img.length === 1 ? css(styles.imgContent) : css(styles.img2);
          return <Fragment key={ index }>
            { item.text.map((item, index) => {
                return <p className={css(styles.text)} key={index}>{item}</p>
              })
            }
            <div className={css(styles.blockImg)}>
              { item.img.map((item, index) => {
                  return <img key={index} className={styleImg} src={item.img} alt="" onClick={this.handleClick.bind(this, item.id)}/>
                })
              }
            </div>
          </Fragment>
        }) }
      </Fragment>
    });
    const postFin = !post ? ' ' : post.map((item, index) => {
      return <p key={index}>{ item.textFin }</p>
    });
    return <div className={css(styles.wrapper)}>
      <div className={css(styles.top)}>
        { title }
        <div className={css(styles.date)}>
          { date }
        </div>
      </div>
      { tag }
      { postTop }
      { postMain }
      { postFin }
      <div className={css(styles.footer)}>
        { tag }
        like
      </div>
      <CommentaryComponent/>
      { this.props.showed && <ShowedPhoto/> }
    </div>
  }
}

export default PostComponent