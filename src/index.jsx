
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducers/index.jsx';
import GameSelector from './containers/GameSelector.jsx';
import CategorySelector from './containers/CategorySelector.jsx';
import CategoryShowContainer from './containers/CategoryShowContainer.jsx';
import CheckoutContainer from './containers/CheckoutContainer.jsx'
import NoMatch from './components/NoMatch.jsx';

import styles from '../styles/core.scss';

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
            <Route path="categoryShow" component={CategoryShowContainer}/>
            <Route path="checkout" component={CheckoutContainer}/>
            <Route path="*" component={NoMatch}/>
        </Router>
    </Provider>
    ),
    document.getElementById("content")
);
