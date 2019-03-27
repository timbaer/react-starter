import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Hello from '../pages/HelloContainer';
import World from '../pages/World';
import NotFound from '../pages/NotFound';

const Main = () => (
    <Switch>
        <Route path="/hello" component={Hello} />
        <Route path="/world" component={World} />
        <Route path="/404" component={NotFound} />
        <Redirect path="/" to="/hello" />
        <Redirect path="*" to="/404" />
    </Switch>
);

const App = () => (
    <div className="Site">
        <Main />
    </div>
);

export default hot(module)(App);
