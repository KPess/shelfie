import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
        URL: 'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
  }

//   handlePreview(value) { ()=> 
//       this.setState({URL: value})}
  

  render() {
    const {URL} = this.state
    return (
        
      //   <form>
      //     <img src="$2 FROM DB" alt="$3 Product name from DB" />
      //     <input placeholder="Image URL" />
      //     <input placeholder="Product Name" />
      //     <input placeholder="Price" />
      //     <submit type="button">Add to inventory</submit>
      //   </form>
      <div className="greenbox">
        <img src={URL} alt="your image preview" style={{height: '150px'}}/>
        <header className="image_preview">
        </header>
        <form id="new_product_form" onSubmit={this.handleSubmit}>
          <label htmlFor="image_url">Image URL:</label>
          <input onChange='{}' id="image_url" name="image_url" type="text" />
          <label htmlFor="product_name">Product Name:</label>
          <input id="product_name" name="product_name" type="text" />

          <label htmlFor="price">Price:</label>
          <input id="price" name="price" type="text" />

          <button style={{backgroundColor: '#ED6B5A'}}>Add to inventory</button>
        </form>
        <button style={{backgroundColor: '#ED6B5A'}}>Cancel</button>
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
