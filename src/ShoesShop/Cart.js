import React, { Component } from 'react'

export class Cart extends Component {
  closeButtonRef = React.createRef();
  render() {
    return (
      <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Cart
            </h5>
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
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th> Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cart.map((item) => {
                  const { id, name, image, price } = item.products;
                  console.log(item);
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>
                        <img width={70} src={image} alt={image} />
                      </td>
                      <td>
                        <button
                          onClick={() => this.props.reduceCartItem(id)}
                          className="btn btn-info"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => this.props.increaseCartItem(id)}
                          className="btn btn-info"
                        >
                          +
                        </button>
                      </td>
                      <td>{price + "S"}</td>
                      <td>{price * item.quantity + "S"}</td>
                      <td>
                        <button
                          onClick={() => this.props.deleteCart(id)}
                          className="btn btn-danger"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() => {
                this.props.clearCart();
                // nhan nut close
                this.closeButtonRef.current.click();
              }}
              type="button"
              className="btn btn-primary"
            >
              Paid
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Cart