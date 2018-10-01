import React, { Fragment } from 'react';

const ArticleComponent = ({ title, img, text  }) => (
    <Fragment>
        <h3>{ title }</h3>
        <img src={ img } alt=""/>
        <p>{ text }</p>
    </Fragment>
);
export default ArticleComponent;