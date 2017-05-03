'use strict';

import React from 'react';
import {observer, observable} from 'mobx-react'

const Form = props => {
	
	return(
		<form>
			<fieldset>
		        <fieldset className="form-group">
		        	<input 
		        		type="text" 
		        		className="form-control form-control-lg" 
		        		placeholder="Article Title" 
		        		 />
		        </fieldset>	
		        <fieldset className="form-group">
		        	<textarea 
		        		className="form-control" 
		        		rows="8" 
		        		placeholder="Write your article (in markdown)"
		        		>
		        			
		        	</textarea>
		        </fieldset>
		        
		        
	        </fieldset>
	    </form>
	);

}

@observer
class Modal extends React.Component{
	
	render(){
		return(
			<div className="editor-page">
		        <div className="container page">
		          <div className="row">
		            <div className="col-md-10 offset-md-1 col-xs-12">
		              <Form />
		              <button 
		              	className="btn btn-lg pull-xs-right btn-primary" 
		              	onClick={this.articleStore.addArticle(this.props.title)}
		              	type="button">
					    	Publish Article
					  </button>
		            </div>
		          </div>
		        </div>
		      </div>
		)
	}
}

export default Modal;