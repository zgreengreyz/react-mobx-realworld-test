'use strict';

import React from 'react';
import { observer } from 'mobx-react'

@observer
class Modal extends React.Component{
	render(){
		return(
			<div className="post-page">
			  <div className="container page">
			    <div className="modal modal-open" style="overflow: none;">

			      <p>Post article</p>

			    </div>
			  </div>
			 </div>
		)
	}
}

export default Modal