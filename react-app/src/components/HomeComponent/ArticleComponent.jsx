import React, { Component } from 'react';

export default class ArticleComponent extends Component {
  render() {
    return <div>
      <h3>{ this.props.title }</h3>
      <img src={this.props.img} alt=""/>
      <p>{ this.props.text }</p>
    </div>
  }
}