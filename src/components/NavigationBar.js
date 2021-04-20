import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap'
import SignUp  from './forms/SignUp';
import SignupForm from './forms/SignupForm';
import Search from './search/Search';
import Product from '../product/Product';
import Dropdown from 'react-bootstrap/Dropdown';

class NavigationBar extends React.Component {

    
 
    productInfo = {
        url: 'http://localhost:8111/'
    }

    pro;
    constructor(props){
        super(props);
        this.state = { searchValue: "value" }; 
    }
    search = (e) => {

        ReactDOM.render(
            <div></div>,
            document.getElementById('productsContainer')
        );
        ReactDOM.render(
            <Product id = 'product' url = {this.productInfo.url} category={"search/"+ReactDOM.findDOMNode(this.refs.searchField).value} />,
            document.getElementById('productsContainer')
          );

    } 
    getProduct(){

        ReactDOM.render(
            <Product id = 'product' url = 'http://localhost:8111/' category="list/Phone" />,
            document.getElementById('productsContainer')
          );  
          return false;
    }

    componentDidMount(){
        this.pro =document.getElementById("productsContainer");
    }
   
    productInfo = {
        url: 'http://localhost:8111/'
    }
    render() {
        return (


            <div>    
           
            <Navbar bg="light" expand="lg">
            <div className="container">
                        <Navbar.Brand href="#home" onClick={this.getProduct}>Bazaar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="#home"  onClick={this.getProduct}>Home</Nav.Link>
                            <NavDropdown title="Location" id="basic-nav-dropdown">
                                
                                    <NavDropdown.Item href="#action/3.1">Sindh</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Punjab</NavDropdown.Item>
                                    
                                    <NavDropdown.Item href="#action/3.2">Balochistan</NavDropdown.Item>
                                    
                                    <NavDropdown.Item href="#action/3.2">KPK</NavDropdown.Item>
                            
                            </NavDropdown>
                            </Nav>

                            <SignupForm className="mr-sm-2"/>
                            {/* <Nav.Link href="#Login"></Nav.Link> */}
                            <Form inline>
                            
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="searchField" ref="searchField" />
                            <Button variant="outline-success" onClick={this.search}>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                       
                        </div>
                        </Navbar>

                      
            </div>
        )
    }
}

export default NavigationBar;