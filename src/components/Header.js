import React from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import SearchTerm from '../features/posts/SearchTerm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

export default function Header() {
    return (
        <header className="App-header">
            <Row className="w-100 align-items-center">
                <Col>
                    <img src={logo} className="App-logo" alt="logo" />
                </Col>
                <Col>
                    <SearchTerm />
                </Col>
            </Row>
        </header>
    );
}