import React from 'react';
import PostsList from './PostsList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
  } from 'react-router-dom';
import ROUTES from '../app/routes';

export default function Main() {
    return (        
        <main>
            <Switch>
                <Route exact path='/' component={PostsList} />
                <Route path ={ROUTES.popular} component={PostsList} />
                <Route path ={ROUTES.gaming} component={PostsList} />
                <Route path ={ROUTES.trashy} component={PostsList} /> 
            </Switch>
        </main>    
    );
}