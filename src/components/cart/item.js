import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

class Item extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
  }

  handleAddToCartClick = (e) => {
    const { id } = this.props;
    this.props.addToCart(id);
  }

  handleRemoveFromCartClick = (e) => {
    const { id } = this.props;
    this.props.removeFromCart(id);
  }

  render() {

    const {
      name,
      price,
      quantity,
      isAddDisabled,
    } = this.props;

    return (
      <div className="product">

        <div className="product-content">
          <div className="product-name">{name}</div>
          <div className="product-details">{price} €</div>
        </div>
        <div className="product-highlight">{quantity}</div>


        <div className="product-actions">
          <ButtonGroup>
            <Button
              onClick={this.handleRemoveFromCartClick}
              disabled={!quantity}
              >
              <Glyphicon glyph="minus" />
            </Button>
            <Button
              onClick={this.handleAddToCartClick}
              disabled={isAddDisabled}
              >
              <Glyphicon glyph="plus" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }

}

export default Item;
