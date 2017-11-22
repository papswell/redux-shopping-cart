import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CartTotal extends Component {

  render() {

    const {
      amount
    } = this.props;
    return (
      <div className="cart_total-container">
        <div className="cart_total">
          Total : {amount} €
        </div>
        <div>
          <Button
            bsStyle="primary"
            bsSize="large"
          >
            BUY NOW !
          </Button>
        </div>
      </div>
    );
  }

}

export default CartTotal;
