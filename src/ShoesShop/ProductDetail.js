import React, { Component } from "react";

export class ProductDetail extends Component {
  render() {
    const { image, name, price, description, quantity } =
      this.props.selectedProduct;
    return (
      <div
        className="modal fade"
        id="DetailModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header ">
              <h2 className="modal-title text-center" id="exampleModalLabel">
                Product Detail
              </h2>
              <button
                ref={this.closeButtonRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead></thead>
                <tbody>
                  <div className="row">
                    <div className="col-5">
                      <h5>{name}</h5>
                      <img className="w-100 d-block" src={image} />
                    </div>
                    <div className="col-7">
                      <h3>Product Information</h3 >
                      <div className="text-start fs-5">
                      <p>Name:{name}</p>
                      <p>Price:{price}</p>
                      <p>Description:{description}</p>
                      <p>Stock:{quantity}</p>
                      </div>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
