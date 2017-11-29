import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CartTotal extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick();
  }

  render() {

    const {
      amount,
      isSaving,
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
            disabled={!amount || isSaving}
            onClick={this.handleClick}
          >
            {isSaving ? 'Saving cart...' : 'BUY NOW !'}
          </Button>
        </div>
      </div>
    );
  }

}

export default CartTotal;
