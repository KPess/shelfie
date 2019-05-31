import React, { Component } from "react";
import axios from 'axios'
import { Server } from "tls";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      URL:
        "https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      product_name: "Hat",
      price: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    e.preventDefault();
    this.setState({URL: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target.value);

    fetch("/api/products", {
      method: "POST",
      body: data
    });
  }

  

  componentDidUpdate() {
    axios.put("/api/products").then(response => {
      this.setState({ products: response.data });
    });
  }

  // Form only works for preview Image. Info entered in fields does not reach Server, although a blank product is displayed
  render() {
    const { URL } = this.state;
    return (
      <div className="greenbox">
        <img src={URL} alt="your image preview" style={{ height: "350px" }} />
        <header className="image_preview" />
        <form id="new_product_form" onSubmit={this.handleSubmit}>
          <label htmlFor="image_url">Image URL:</label>
          <input onChange= {this.handleChange} id="image_url" name="image_url" type="text" value={URL} placeholder="Enter IMAGE ADDRESS HERE"/>
          {/* Placeholder image for preview is deleted if URL is cleared. */}
          <label htmlFor="product_name">Product Name:</label>
          <input id="product_name" name="product_name" type="text" value={this.product_name}/>
          <label htmlFor="price">Price:</label>
          <input id="price" name="price" type="text" value={this.price} />
          <button style={{ backgroundColor: "#ED6B5A" }}>
            Add to inventory
          </button>
        <button style={{ backgroundColor: "#ED6B5A" }}>Cancel</button>
        </form>
      </div>
    );
  }
}

// Functionality of the form:

// A user should be able to add a name and a price for the product.
// A user should be able to add an image URL for the product.
// There should be an image preview that displays the image added by the user.
// If there is no image URL, a default image should appear in the preview.
// The image container should remain the same size.
// A user should be able to click the 'Cancel' button to clear all three input boxes.
// A user should be able to click the 'Add to Inventory' button.
// This should save the product in the database.
// This should clear the input boxes
