import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './app.css';


export default class WelCome extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <h1 className="header_title"> {this.props.title} </h1>
                    <p className="header_description">description</p>
                </Col>
            </Row>
        );
    }
}
