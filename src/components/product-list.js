import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './product-item';
import makeList from './list';

const ProductList = makeList(ProductItem);

export default class Products extends Component {

  componentDidMount() {
    this.props.fetch();
  }

  render() {

    const { fetch, isLoading, ...props } = this.props;

    return (
      isLoading ? (
        <div>Loading data...</div>
      ) : (
        <ProductList {...props} />
      )
    )
  }
}
