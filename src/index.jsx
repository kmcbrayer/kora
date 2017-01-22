
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import App from './components/App.jsx';
import NoMatch from './components/NoMatch.jsx';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="stuff" component={NoMatch}/>
        </Route>
    </Router>
    ),
    document.getElementById("content")
);
