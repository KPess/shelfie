import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component {
  render() {
    return <div>Dashboard
        <Product />

    </div>;
  }
}

// Functionality of the dashboard:

// A user should be able to see all of the products that have been added to the inventory.
// Each individual product should display its name, price and image.
// If there is no image URL, a default image should appear for the product.

// MAP PRODUCT COMPONENT