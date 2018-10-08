import React, {Component} from 'react';
import axios from "axios";
import DateTime from "../DateTime/DateTime";

import {css} from 'aphrodite/no-important';
import styles from './PostStyle'

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
    const { articles } = this.props;
    const post = this.state.post;
    const pos = !post ? 'lod' : post.map((item, index) => {
      return <div key={index}>
        { typeof item.text !== "object" ? <p className={css(styles.text)}>{ item.text }</p> : item.text.map((item, index) => {
          return <p className={css(styles.text)} key={index}>{ item }</p>
        })
        }
        <div className={css(styles.blockImg)}>
          { typeof item.img === "string" ? <img className={css(styles.imgContent)} src={ item.img } alt=""/> : item.img.map((item, index) => {
            return <img key={index} className={css(styles.img2)} src={ item } alt=""/>
          })
          }
        </div>
      </div>
    });

    return <div className={css(styles.wrapper)}>
      <div className={css(styles.top)}>
        <h3 className={css(styles.title)}>{ articles && articles[0].title }</h3>
        <div className={css(styles.date)}>
          <DateTime value={  articles && articles[0].date } format='DD MMMM YYYY'/>
        </div>
      </div>
      <img className={css(styles.img)} src={ articles && articles[0].img } alt=""/>
      <p className={css(styles.text)}>{ articles && articles[0].text }</p>
      {pos}
    </div>
  }
}

export default PostComponent