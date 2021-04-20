import React from 'react';
import './css/templatemo-style.css'
import ProductList from '../api/ProductList'
import axios from 'axios';

import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { Card } from "shards-react";


class ProductItem extends React.Component {

   
     headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    // state = {
    //     products: ProductList
    //   }
      componentDidMount() {
        axios.get(`http://192.168.11.1:8111/list/Phone`,this.headers)
        .then(res => {
          //const products = res.data;
          console.log(res.data);
        }) 
      }
    render() {  

        const { productName, address, date, price,isLoading  } = this.props;

        const itemDetails = (
            <div >
                                <div className="product-item-1">
                                    <div className="product-thumb">
                                        <img src={process.env.PUBLIC_URL + 'images/products/1.jpg'}  alt="Product Title" />
                                    </div> 
                                    <div className="product-content">
                                        <h5><a href="#"><span id="itemName">Product name</span></a></h5>
                                        <span className="tagline"><span id="address">Address</span></span>
                                        <span className="price"><span id="price">Price</span></span>
                                        <span className="h6" ><span id="date">Date</span></span>
                                    </div> 
                                </div> 
            </div> 
            );

            const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

            return (
              <Card
                className="mx-auto mt-3  p-5"
                style={{ maxWidth: "300px", minHeight: "120px" }}
              >
                {isLoading ? loadingMessage : itemDetails}
              </Card>
            );
    
    }
}

export default ProductItem;
