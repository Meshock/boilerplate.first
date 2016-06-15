import React from 'react'
import ReactDOM from 'react-dom'
import request from 'axios'
import config from '../package.json'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import reducers from './reducers'

let store = configureStore(reducers);

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import IndexPage from './IndexPage'
import App from './App';
import Init from './Init'
import Main from './containers/Main'
import AppExample from './containers/Example'



ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Init}>
        <IndexRoute component={IndexPage}/>
        <Route path="app" component={App}>
          <IndexRoute component={Main}/>
          <Route path="example" component={AppExample}/>
        </Route>
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
