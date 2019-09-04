import React, { Component } from 'react';
import { Card, Tag } from 'antd';


export default class Product extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        console.log(this.props.details);
        let details = this.props.details;
        return (
            <Card style={{ margin: 'auto 15px 25px' }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                    <img alt="example" width="100%" src={details.image} />
                </div>
                <div className="shop-card">
                    <h3>{details.title}</h3>
                    <p>{details.description}</p>
                </div>
                <div style={{ padding: '0px 16px 10px' }}>
                    <Tag color="#54d068">{details.price}$</Tag>
                    <Tag color="#108ee9" onClick={() => this.props.addToCard(this.props.index)} >Add To Card</Tag>
                </div>
            </Card >
        )
    }
}