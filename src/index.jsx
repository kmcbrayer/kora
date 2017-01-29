//this needs to be first
import 'babel-polyfill'

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducers/index.jsx';
import GameSelector from './containers/GameSelector.jsx';
import CategorySelector from './containers/CategorySelector.jsx';
import CategoryShow from './containers/CategoryShow.jsx';

import NoMatch from './components/NoMatch.jsx';

const loggerMiddleware = createLogger();

let store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={GameSelector}/>
            <Route path="categories" component={CategorySelector}/>
            <Route path="categoryShow" component={CategoryShow}/>
            <Route path="*" component={NoMatch}/>
        </Router>
    </Provider>
    ),
    document.getElementById("content")
);
