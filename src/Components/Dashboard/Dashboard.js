import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product'

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("/api/products").then(response => {
      this.setState({ products: response.data });
    });
  }
  render() {
    return <div>
        <Product products={this.state.products}/>

    </div>;
  }
}

// Functionality of the dashboard:

// A user should be able to see all of the products that have been added to the inventory.
// Each individual product should display its name, price and image.
// If there is no image URL, a default image should appear for the product.

// MAP PRODUCT COMPONENT