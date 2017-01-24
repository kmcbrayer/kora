
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Home from './components/Home.jsx';
import NoMatch from './components/NoMatch.jsx';
import LoginForm from './components/LoginForm.jsx';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="login" component={LoginForm}/>
        <Route path="*" component={NoMatch}/>
    </Router>
    ),
    document.getElementById("content")
);
