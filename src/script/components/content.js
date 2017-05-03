'use strict';

import React from 'react'
import {observer} from 'mobx-react'

const Banner = props => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          conduit
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};
const Container = props => {
	article = props.article
	if(article.length === 0){
		return(
			<div className="article-preview">No articles yet</div>
		)
	}
	return(
		<div className="article-preview">
			<div className="article-meta">
	      		<div className="info">
			      <span className="date">
			        {article.date}
			      </span>
			      <h1>article.title}</h1>
			      <p>{article.body}</p>
			    </div>
			</div>
	      
	    </div>
	);
}

@observer
class Content extends React.Component{
	render() {
		return (
			<Banner />,
			<Container />
			)
	}
}

export default Content;