import React, { Component } from 'react';
import { Col, Row } from 'antd';

import h from './../helper';

import Product from './Product';

export default class Products extends React.Component {
    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
        this.renderProduct = this.renderProduct.bind(this);
        this.chunkProduct = h.array_chunk(Object.keys(this.props.products), 3);
    }

    renderProduct(key) {
        console.log(key);
        return (
            <Col key={key} span={8}>
                <Product index={key} details={this.props.products[key]} addToCart={this.props.addToCart} orders={this.props.orders} />
            </Col>
        );
    }

    renderRow(key) {
        return (
            <Row key={key}>
                {this.chunkProduct[key].map(this.renderProduct)}
            </Row>
        );
    }
    render() {
        console.log(this.chunkProduct);
        return (
            <Row>
                <Col span={24}>
                    <Row className="row-product">
                        {Object.keys(this.chunkProduct).map(this.renderRow)}
                    </Row>
                </Col>
            </Row>
        );
    }
}