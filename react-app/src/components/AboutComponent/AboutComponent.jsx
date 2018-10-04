import React, {Component, Fragment} from 'react';
import axios from "axios";

import {css} from "aphrodite";
import styles from "./AboutStyle";

class AboutComponent extends Component {
  state = {
    item: null
  };

  componentWillMount() {
    axios.get('./json/about.json').then(({data}) => {
      this.setState({item: data})
    })
  }

  render() {

    const item = this.state.item;

    const content = !item ? 'lod' : item.map((item, index) => {
      return <Fragment key={index}>
        <h3>{ item.title }</h3>
        <img className={css(styles.img)} src={ item.img } alt=""/>
        {
          item.text.map((item, index) => {
            return <p className={css(styles.text)} key={index}>{ item }</p>
          })
        }
      </Fragment>
    });
    return <div className={css(styles.wrapper)}>
      { content }
    </div>
  }
}

export default AboutComponent