import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Data from './data.js';
import Header from './components/Header';
import WelCome from './components/Welcome';
import Products from './components/Products';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: Data,
            orders: []
        }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(key) {
        if (this.state.products[key].available && this.state.orders.indexOf(key) == -1) {
            this.state.orders.push(key);
            // this.setState((prevState) => {
            //     orders: prevState.orders
            // });
        }
    }

    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Header SelectedMenu="home" />
                    <WelCome title="Welcome to my shop" />
                    <Products products={this.state.products} addToCart={this.addToCart} orders={this.state.orders} />
                </Col>
            </Row>
        );
    }
}


