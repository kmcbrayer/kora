
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';

import reducer from './reducers/index.jsx';
import GameSelector from './containers/GameSelector.jsx';
import CategorySelector from './containers/CategorySelector.jsx';
import CategoryShowContainer from './containers/CategoryShowContainer.jsx';
import CheckoutContainer from './containers/CheckoutContainer.jsx'

import styles from '../styles/core.scss';


let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        applyMiddleware(
            thunkMiddleware
        ),
    )
);

persistStore(store);

render((
    <Provider store={store}>
        <Router>
            <div> {/* Make this a component like <Content> or something */}
                <Route path="/" exact={true} component={GameSelector}/>
                <Route path="/categories" component={CategorySelector}/>
                <Route path="/categoryShow" component={CategoryShowContainer}/>
                <Route path="/checkout" component={CheckoutContainer}/>
            </div>
        </Router>
    </Provider>
    ),
    document.getElementById("content")
);
