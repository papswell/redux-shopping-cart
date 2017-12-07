import React, { Component } from 'react';
import {Button, Grid, Row, Col, Navbar, Nav, NavItem, Alert } from 'react-bootstrap';
import ReactToggle from 'react-toggle';
import 'react-toggle/style.css';
import noop from './../utils/no-op';

import ProductList from './../containers/products';
import Cart from './../containers/cart';
import Counter from './cart/counter';

class App extends Component {

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {

    const { categories, itemCount, error, sendUselessAction } = this.props;

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Redux Shopping Cart</a>
            </Navbar.Brand>
          </Navbar.Header>


          <Nav pullRight>
            <NavItem eventKey={0}>
              <Button onClick={sendUselessAction}>
                Dispatch useless action
              </Button>
            </NavItem>
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
            {categories.map(category => (
              <Col sm={4} key={category.id}>
                <h2>{category.name}</h2>
                <ProductList category={category.id}/>
              </Col>
            ))}
          </Row>
          <Row>
            <Col sm={12}>
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
