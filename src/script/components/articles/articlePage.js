import React from 'react'
import {Link} from 'react-router'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import Preview from './articlesPreview'

import agent from '../../agent'
import store from '../../store/articlesStore'

@inject('articlesStore')
@observer
class ArticlePage extends React.Component{

	
 	render(){
		const articles = this.props.articlesStore.articles;
		return (
			
			<div className="container page">
				<div className="row">
					<div className="col-md-9">
						<Preview articles={articles} />
						
					</div>
				</div>
	    	</div>
		);
	}
}

export default ArticlePage;