import React, { Component } from "react";
import ProductItem from "./ProductItem";

export class ProductList extends Component {
  render() {
    return (
      <div >
        <div className="row">
          {this.props.products.map((item) => (
            <div key={item.id } className="col-3 mb-4">
              <ProductItem 
              prod={item}
              selectProduct={this.props.selectProduct}
              addToCart={this.props.addToCart}
               />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
