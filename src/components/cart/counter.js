import React from 'react';
import { Glyphicon, Badge } from 'react-bootstrap';

const Counter = ({ count }) => (
  <div className="cart-counter">
    <Glyphicon glyph="shopping-cart" />
    <Badge>
      {count}
    </Badge>
  </div>
)

export default Counter;
