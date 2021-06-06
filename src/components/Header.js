import React from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import SearchBar from './SearchBar';

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <SearchBar />
        </header>
    );
}