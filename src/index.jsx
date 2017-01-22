
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './components/App.jsx';
import NoMatch from './components/NoMatch.jsx';
import LoginForm from './components/LoginForm.jsx';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="login" component={LoginForm}/>
        <Route path="*" component={NoMatch}/>
    </Router>
    ),
    document.getElementById("content")
);
