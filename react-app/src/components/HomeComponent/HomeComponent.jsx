import React, { Component } from  'react';
import {articleStore} from "../../store/ArticlesStore";
import ArticleComponent from "./ArticleComponent";

import { css } from 'aphrodite/no-important';
import styles from './HomeStyle'

export default class HomeComponent extends Component {
  state = {
    article: []
  };

  componentDidMount() {
    articleStore.subscribe('dataChanged', (article) => {
      this.setState({ article: article })
    });
    articleStore.getList();
  }
  render() {

    console.log(this.state);
    const article = this.state.article.map((item, index) => {
      return <div key={index} >
        <ArticleComponent
          title={item.title}
          text={item.text}
          img={item.img}
          index={index}
        />
      </div>
    });
    return <div className={css(styles.wrapper)}>
      { article }
    </div>
  }
}