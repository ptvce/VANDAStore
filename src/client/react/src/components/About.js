import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Header from './Header';
import WelCome from './Welcome';



export default class About extends React.Component {
    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <WelCome title="Welcome to my about page" />
                    <Header SelectedMenu="morepage:about" />
                </Col>
            </Row>
        );
    }
}

