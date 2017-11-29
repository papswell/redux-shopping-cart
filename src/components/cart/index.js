import React, { Component } from 'react';
import List from './list';
import Total from './total';

class Cart extends Component {

  render() {

    const  { amount, save, isSaving, ...props } = this.props;
    return (
      <div>
        <List {...props} />
        <Total amount={amount} onClick={save} isSaving={isSaving} />
      </div>
    );
  }

}

export default Cart;
