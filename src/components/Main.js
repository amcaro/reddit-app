import React from 'react';
import PostsList from './PostsList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    Link,
  } from 'react-router-dom';
import ROUTES from '../app/routes';
import '../assets/Main.css';

export default function Main() {
    return (        
        <main>
            <SideBar />
            <Switch>
                <Route exact path='/' component={PostsList} />
                <Route path ={ROUTES.popular} component={PostsList} />
                <Route path ={ROUTES.gaming} component={PostsList} />
                <Route path ={ROUTES.trashy} component={PostsList} /> 
            </Switch>
        </main>    
    );
}


function SideBar() {
    return (
        <nav>
            <Link to={ROUTES.popular}>Subreddit: Popular</Link>
            <Link to={ROUTES.gaming}>Subreddit: Gaming</Link>
            <Link to={ROUTES.trashy}>Subreddit: Trashy</Link>
        </nav>
    );
}