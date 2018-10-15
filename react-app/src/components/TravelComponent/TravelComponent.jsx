import React, {Component, Fragment} from 'react';
import ArticleComponent from "../ArticleComponent/ArticleComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import axios from "axios";

import { css } from 'aphrodite/no-important';
import styles from './TravelStyle'

class SpeedwayComponent extends Component {
  state = {
    data: null
  };

  componentWillMount() {
    const { setArticlesTravel } = this.props;
    axios.get('./json/article.json').then(({data}) => {
      setArticlesTravel(data)
    });
    axios.get('./json/travelHeader.json').then(({data}) => {
      this.setState({ data: data })
    })
  }

  handleClick(id) {
    const { setId } = this.props;
    setId( id );
  }

  render() {
    const { articles } = this.props;
    const header = !this.state.data ? 'Loading...' : this.state.data.map((item, index) => {
      return <HeaderComponent key={index} title={item.title} tag={item.tag} img={item.img}/>
    });
    const article = !articles ? 'Loading...' : articles.map((item, index) => {
      return <Fragment key={index}>
        <ArticleComponent
          { ...item }
          handleClick = { this.handleClick.bind(this) }
        />
      </Fragment>
    });
    return <div className={css(styles.wrapper)}>
      { header }
      { article }
    </div>
  }
}

export default SpeedwayComponent