import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import User from '../pages/User';
import Login from '../pages/Login';

export default class App extends Component {
    render () {
        return (
            <div>
                <header>
                    <h2>React Router Demo</h2>
                </header>
                <main>
                    <ul>
                        <li>
                            <NavLink to="/home">Home Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user">User Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login Page</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/user" component={User} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </main>
            </div>
        )
    }
}