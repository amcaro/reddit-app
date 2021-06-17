import React from 'react';
import PostsList from './PostsList';
import {
    Switch,
    Route,
    NavLink,
  } from 'react-router-dom';
import ROUTES from '../app/routes';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import '../assets/Main.css';

export default function Main() {
    return (  
        <main>
            <Row>
                <SideBar />
                <Switch>
                    <Route exact path='/' component={PostsList} />
                    <Route path ={ROUTES.popular} component={PostsList} />
                    <Route path ={ROUTES.gaming} component={PostsList} />
                    <Route path ={ROUTES.trashy} component={PostsList} /> 
                </Switch>
            </Row>
        </main>  
    );
}


function SideBar() {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title><h5>Subreddits:</h5></Card.Title>
                    <NavSubs />
                </Card.Body>
            </Card>
        </Col>
    );
}

function NavSubs() {
    return <Nav>
                <Nav.Item as="p">
                    <NavLink to={ROUTES.popular}>Popular</NavLink>
                </Nav.Item>
                <Nav.Item as="p">
                    <NavLink to={ROUTES.gaming}>Gaming</NavLink>
                </Nav.Item>
                <Nav.Item as="p">
                    <NavLink to={ROUTES.trashy}>Trashy</NavLink>
                </Nav.Item>
            </Nav>
}