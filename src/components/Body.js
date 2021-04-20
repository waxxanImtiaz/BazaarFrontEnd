import React from 'react';
import NavigationBar from './NavigationBar';
import Product from '../product/Product';

import { Button, Navbar,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap'
import StateExamp from './examples/StateExmp';
import ReactDOM from 'react-dom';
class Body extends React.Component {
    productInfo = {
        url: 'http://localhost:8111/'
    }
  
    render() {
        return (<div >
            <NavigationBar productRef = 'hello' />
            <div id = "productsContainer">
            <Product id = 'product' url = {this.productInfo.url} category="list/Phone" />
                
           
            </div>

            
           
                
        </div>)
    }

    search(){
        var  doc = document.getElementsByName('Product');
        doc.show();
        //alert("this is search"+doc);
    }
}



export default Body;