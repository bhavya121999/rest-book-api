import React from 'react';

import './App.css';
import {Container, Row, Col} from "react-bootstrap"
import Navigation from "./components/Navigation"
import Welcome from "./components/Welcome"

import BookList from "./components/BookList"
import Book from "./components/Book"
import Footer from "./components/Footer"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"

function App() {

const marginTop={
marginTop:"20px"
};
  return (
    <Router>
    
        <Navigation />
        <Container>
        <Row>
        <Col lg={12} style={marginTop}>
       
<Switch>
<Route path="/" exact component={Welcome}/>
<Route path="/add" exact component={Book}/>
<Route path="/list" exact component={BookList}/>
</Switch>
</Col>

        
        
        </Row>
        </Container>
        <Footer />
        
</Router>

  
  );
}

export default App;
