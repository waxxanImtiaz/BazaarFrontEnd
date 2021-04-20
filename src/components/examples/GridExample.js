import React from 'react';

import { Button, Navbar,Container,Row,Col,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap'

import ReactDOM from 'react-dom';
class GridExample extends React.Component {
    
  
    render() {
        return (<div>

            <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            </Container>
        </div>)
    }

   
}



export default GridExample;