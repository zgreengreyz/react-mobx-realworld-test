'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Content from './components/content'
import App from './components/app'
import Modal from './post/modal'


ReactDOM.render((
	<Router history={hashHistory}>
      <Route path="/" component={App}>
      	<IndexRoute component={Content} />
        <Route path="/post" component={Modal} />
      </Route>
    </Router>
	),document.getElementById('root')
);
