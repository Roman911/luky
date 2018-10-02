import React, {Component, Fragment} from 'react';
import ArticleComponent from "./ArticleComponent";
import axios from "axios";

import {css} from 'aphrodite/no-important';
import styles from './HomeStyle'

export default class HomeComponent extends Component {
  componentWillMount() {
    const {setArticles} = this.props;
    axios.get('./json/article.json').then(({data}) => {
      setArticles(data)
    })
  }

  render() {
    const {articles} = this.props;
    console.log(this.props);
    const article = !articles ? 'Loading...' : articles.map((item, index) => {
      return <Fragment key={index}>
        <ArticleComponent
          {...item}
        />
      </Fragment>
    });
    return <div className={css(styles.wrapper)}>
      { article }
    </div>
  }
}