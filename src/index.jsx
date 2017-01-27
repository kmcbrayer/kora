
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index.jsx';

import GameSelector from './containers/GameSelector.jsx';
import NoMatch from './components/NoMatch.jsx';
import LoginForm from './components/LoginForm.jsx';

let store = createStore(reducer);

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={GameSelector}/>
            <Route path="login" component={LoginForm}/>
            <Route path="*" component={NoMatch}/>
        </Router>
    </Provider>
    ),
    document.getElementById("content")
);
