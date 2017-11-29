import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem, Alert } from 'react-bootstrap';
import ReactToggle from 'react-toggle';
import 'react-toggle/style.css';
import noop from './../utils/no-op';

import ProductList from './../containers/products';
import Cart from './../containers/cart';
import Counter from './cart/counter';

class App extends Component {
  render() {

    const { itemCount, error } = this.props;

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Redux Shopping Cart</a>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav pullRight>
            <NavItem eventKey={1}>
              <div className="toggle-container">
                <span>Display only items in stock</span>
                <ReactToggle />
              </div>
            </NavItem>
            <NavItem eventKey={2}>
              <Counter count={itemCount} />
            </NavItem>
          </Nav>
        </Navbar>


        <Grid>
          {error && (
            <Row>
              <Col sm={12}>
                <Alert bsStyle="danger">
                  {error}
                </Alert>
              </Col>
            </Row>
          )}
          <Row>
            <Col sm={6}>
              <h2>Our products</h2>
              <ProductList />
            </Col>
            <Col sm={6}>
              <h2>Your shopping cart</h2>
              <Cart
                addToCart={noop}
                removeFromCart={noop}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
