import Header from './header'
import React from 'react'

class App extends React.Component{
	render(){
		return(
			<div>
				<Header />
				{ this.props.children }
			</div>
		)
	}
}

export default App