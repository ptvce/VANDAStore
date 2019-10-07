import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Cookie from 'universal-cookie';
import ReactMixin from 'react-mixin';
import Data from './data.js';
import Header from './components/Header';
import WelCome from './components/Welcome';
import Products from './components/Products';
import Mixins from './mixins';

const cookie = new Cookie();
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: Data,
            orders: (typeof (cookie.get('orders')) == "undefined" ? [] : cookie.get('orders'))
        }
        this.addToCart = this.addToCart.bind(this);

        this.success('hello world');
    }

    addToCart(key) {
        if (this.state.products[key].available && this.state.orders.indexOf(key) == -1) {
            this.state.orders.push(key);
            cookie.set('orders', this.state.orders, { path: '/' });
            // this.setState((prevState) => {
            //     orders: prevState.orders
            // });
        }
    }

    render() {
        //  console.log('order:' + this.state.orders);
        this.error('order:' + this.state.orders);
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

ReactMixin.onClass(App, Mixins.Logs);
export default App;
