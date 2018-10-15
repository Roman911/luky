import React, {Component, Fragment} from 'react';
import axios from "axios";
import DateTime from "../DateTime/DateTime";
import CommentaryComponent from "../CommentaryComponent/CommentaryComponent";

import {css} from 'aphrodite/no-important';
import styles from './PostStyle';
import btn from '../../style/buttons'

class PostComponent extends Component {
  state = {
    post: null
  };

  componentWillMount() {
    const post = this.props.post;
    axios.get(`./${post}.json`).then(({data}) => {
      this.setState({post: data})
    })
  }

  render() {
    const post = this.state.post;
    const title = !post ? 'loading' : post.map((item, index) => {
      return <Fragment key={index}>
        {item.title === undefined ? ' ' : <h3 className={css(styles.title)}>{item.title}</h3>}
      </Fragment>
    });
    const date = !post ? 'loading' : post.map((item, index) => {
      return <Fragment key={index}>
        {item.date === undefined ? ' ' : <DateTime value={item.date} format='DD MMMM YYYY'/>}
      </Fragment>
    });
    const tag = !post ? ' ' : post.map((item, index) => {
      return <div key={index}>
        { item.tag === undefined ? ' ' : item.tag.map((item, index) => {
        return <span key={index} className={css(btn.tag)}>
        { item }
        </span>
      })}
      </div>
    });
    const pos = !post ? 'lod' : post.map((item, index) => {
      return <div key={index}>
        {typeof item.text !== "object" ?
          <p className={css(styles.text)}>{item.text}</p> : item.text.map((item, index) => {
            return <p className={css(styles.text)} key={index}>{item}</p>
          })
        }
        <div className={css(styles.blockImg)}>
          {typeof item.img === "string" ?
            <img className={css(styles.imgContent)} src={item.img} alt=""/> : item.img.map((item, index) => {
              return <img key={index} className={css(styles.img2)} src={item} alt=""/>
            })
          }
        </div>
      </div>
    });

    return <div className={css(styles.wrapper)}>
      <div className={css(styles.top)}>
        { title }
        <div className={css(styles.date)}>
          { date }
        </div>
      </div>
      { tag }
      { pos }
      <div className={css(styles.footer)}>
        { tag }
        like
      </div>
      <CommentaryComponent/>
    </div>
  }
}

export default PostComponent