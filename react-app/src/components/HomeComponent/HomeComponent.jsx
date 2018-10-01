import React, { Component } from  'react';
import ArticleComponent from "./ArticleComponent";
import { css } from 'aphrodite/no-important';
import styles from './HomeStyle'
import axios from "axios";

export default class HomeComponent extends Component {
    componentWillMount() {
      const { setArticles } = this.props;
        axios.get('./json/article.json').then(({ data }) => {
            setArticles(data)
        })
    }
  render() {
      const { articles } = this.props;
      console.log(this.props);
    const article = !articles ? 'Loading...' : articles.map((item, index) => {
      return <div key={index} >
        <ArticleComponent
            { ...item }
        />
      </div>
    });
    return <div className={css(styles.wrapper)}>
      { article }
    </div>
  }
}