import Header from './header'
import Content from './content'
import Modal from './post/modal'
import React from 'react'
import {observer} from 'mobx-react'

@observer
class Home extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<Content />
			</div>
		)
	}
}

export default Home