'use strict';

import React from 'react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'

import Modal from "../post/modal"

const VisitorView = props => {
    return(
        <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/post" className="nav-link">
                    New Post
                </Link>
            </li>
        </ul>
    );
};
@observer
class Header extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-light">
		        <div className="container">
		        <Link className="navbar-brand" href="index.html">conduit</Link>
		        	<VisitorView />
			    </div>
			</nav>
		);
	}
}
console.log(Modal.state);
export default Header;