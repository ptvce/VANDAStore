import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Header from './Header';
import WelCome from './Welcome';



export default class Contact extends React.Component {
    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Header SelectedMenu="morepage:contact" />
                    <WelCome title="Welcome to my Contact page" />
                </Col>
            </Row>
        );
    }
}

