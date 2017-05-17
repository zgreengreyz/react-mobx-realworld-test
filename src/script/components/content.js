'use strict';

import React from 'react'
import {Link} from 'react-router'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx-react'

import agent from '../agent'
import ArticlePage from './articles/articlePage'

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

	render(){
		
		return(
			<div className="home-page">
				<Banner />
				<ArticlePage />
				
			</div>
		)
	}
}

export default Content;