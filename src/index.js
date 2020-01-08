import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth/Auth'
import * as serviceWorker from './serviceWorker';
import {Route, Switch, Router, Redirect} from "react-router";
import history from './Components/history';
import Main from "./Main/Main";
import PrivateRoute from "./Components/PrivateRoute"
ReactDOM.render(
    <Router history={history}>
            <Switch>
                <Route path={"/login/"} component={Auth}/>
                <PrivateRoute path={"/main/"} component={Main}/>
                <Redirect exact from='/' to='/login' />
            </Switch>
    </Router>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

