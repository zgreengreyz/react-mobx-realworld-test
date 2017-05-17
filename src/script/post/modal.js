'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'

import agent from '../agent'


@observer
class Modal extends React.Component{
	@observable title = [];
	@observable body = [];

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	render(){
		const article = this.props;
		return(
			<div className="editor-page">
				<div className="container page">
					<div className="row">
						<div className="col-md-10 offset-md-1 col-xs-12">
							<form>
								<fieldset>
									<fieldset className="form-group">
										<input
											ref="newTitle"
											type="text"
											className="form-control form-control-lg"
											placeholder="Article Title"
											onChange={this.onChangeTitle}
											value={article.title}
										/>

									</fieldset>
									<fieldset className="form-group">
						        	<textarea
										className="form-control"
										rows="8"
										placeholder="Write your article (in markdown)"
										onChange={this.onChangeBody}
										value={article.body}>
						        			
						        	</textarea>
									</fieldset>
								</fieldset>
							</form>
							<button
								className="btn btn-lg pull-xs-right btn-primary"
								onClick={this.onSubmit}
								type="submit">
								Publish Article
							</button>
						</div>
					</div>
				</div>
				<p>
					{article.title}</p>:<p> {article.body}
			</p>
			</div>
		);

	}


	@action onChangeTitle = (event) => {

		this.title = event.target.value;

		console.log(this.title)

	};

	@action onChangeBody = (event) => {

		this.body = event.target.value

		console.log(this.body)

	}

	@action onSubmit(){
		console.log(this);
		store.addArticle({title: this.title[0], body: this.body[0]});
		agent.Articles.create(store);
	}

}

export default Modal;