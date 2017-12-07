import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './product-item';
import makeList from './list';

const ProductList = makeList(ProductItem);

export default class Products extends Component {

  render() {

    const { isLoading, ...props } = this.props;

    return (
      isLoading ? (
        <div>Loading data...</div>
      ) : (
        <ProductList {...props} />
      )
    )
  }
}
