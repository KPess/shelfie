import React, { Component } from "react";
import axios from "axios";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }


  // componentDidMount() {
  //   axios.get("/api/products").then(response => {
  //     this.setState({ products: response.data });
  //   });
  // }
  render() {
    const { products } = this.props;
    let item = products.map((property, index) => {
    return (
      <div className="productbox">
        <header className="productimage">
          <img style={{width: "25vw"}} src={property.image_url} alt={property.product_name}></img>
        </header>
        <div key={index}>
          <h1 key="product_name">{property.product_name}</h1>
          <h2>
            ${property.price}
          </h2>
        </div>
        <button
            onClick={() => {
              axios
              .delete("/api/products/" + property.product_id)
              .then(response => {
                this.state.delete(response.data);
              })
              .catch(error => {
                console.log(error);
              });
            }}
          >
            Delete
          </button>
      </div>
    )});
    return (
      <div>{item}</div>
    )
  };

  
  componentDidUpdate() {
    axios.put("/api/products").then(response => {
      this.props({ products: response.data });
    });
  }
}
