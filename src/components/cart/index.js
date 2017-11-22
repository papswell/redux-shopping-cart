import React, { Component } from 'react';
import List from './list';
import Total from './total';

class Cart extends Component {

  render() {

    const  { amount, ...props } = this.props;
    return (
      <div>
        <List {...props} />
        <Total amount={amount} />
      </div>
    );
  }

}

export default Cart;
