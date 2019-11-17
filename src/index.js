import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth'
import * as serviceWorker from './serviceWorker';
import {Route, Switch, Router, Redirect} from "react-router";
import history from './history'

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path={"/login/"} component={Auth}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

