'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import {Provider} from 'mobx-react'

import Content from './components/content'
import App from './components/app'
import Modal from './post/modal'
import Article from './components/articles/article'
import articlesStore from './store/articlesStore'


const stores = {
	articlesStore
};

window._____APP_STATE_____ = stores;

ReactDOM.render((
		<Provider {...stores}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Content} />
					<Route path="post" component={Modal} />
					<Route path="article/:id" component={Article} />
				</Route>
			</Router>
		</Provider>
	),document.getElementById('root')
);