import React, { Component } from "react";

export class ProductItem extends Component {
  render() {
    const { name, price, image } = this.props.prod;
    return (
      <div className="card p-3 h-100 d-flex justify-content-between">
        <img className="w-100 d-block" src={image}  alt={image}/>
        <h5>{name}</h5>
        <h4>Price: {price} $</h4>
        <div className="">
          <button
            className="btn btn-info me-3"
            data-bs-toggle="modal"
            data-bs-target="#DetailModal"
            onClick={() => {
              this.props.selectProduct(this.props.prod);
            }}
          >
            View Detail
          </button>
          <button
            onClick={() => {
              this.props.addToCart(this.props.prod);
            }}
            className="btn btn-dark"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
