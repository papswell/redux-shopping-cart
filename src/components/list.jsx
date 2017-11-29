import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './product-item';

const makeList = (Item) => class List extends Component {

  static propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
  }

  render() {

    const {
      products,
      ...props
    } = this.props;

    return (
      <div className="list">
        {products.map(product => <Item key={product.id} {...product} {...props} />)}
      </div>
    );
  }
}

export default makeList;
