import React from 'react';

import axios from 'axios';

export default class ProductList extends React.Component {
//   state = {
//     products: []
//   }
  handleSubmit = event => {
    event.preventDefault();

    axios.get(`http://localhost:8111/list/mobiles`)
      .then(res => {

        //const products = res.data;
        //this.setState({ res.data });
      })
  }
  

  render() {
    return (
        <div></div>
    //   <ul>
    //     { this.state.products.map(person => <li>{products.name}</li>)}
    //   </ul>
    )
  }
}