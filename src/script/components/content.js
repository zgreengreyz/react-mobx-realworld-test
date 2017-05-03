'use strict';

import React from 'react'
import { observer } from 'mobx-react'

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

@observer
class Content extends React.Component{
	
	render() {
		const articleStore = this.props;
		if(articleStore.length === 0){
			return(
				<div className="article-preview">No articles yet</div>
			)
		}

		return (
			<Banner />,
			<div className="article-preview">
			<div className="article-meta">
	      		<div className="info">
			      <span className="date" article={articleStore}>
			        {articleStore.articles.date}
			      </span>
			      <h1>{articleStore.articles.title}</h1>
			      <p>{articleStore.articles.body}</p>
			    </div>
			</div>
	      
	    </div>
			)
	}
}

export default Content;