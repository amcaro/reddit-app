import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/App.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Header />
          <Main />
        </Container>
      </div>
    </Router>
  );
}

export default App;
