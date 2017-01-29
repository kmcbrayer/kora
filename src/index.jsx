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
import NoMatch from './components/NoMatch.jsx';
import { fetchCategories } from './actions/index.jsx';

const loggerMiddleware = createLogger();

let store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

//pre load categories for first game
store.dispatch(fetchCategories(store.getState().loadInfo.games[0].id));

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={GameSelector}/>
            <Route path="categories" component={CategorySelector}/>
            <Route path="*" component={NoMatch}/>
        </Router>
    </Provider>
    ),
    document.getElementById("content")
);
