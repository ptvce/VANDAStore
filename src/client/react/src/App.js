import React, { Component } from 'react';
import { Row, Col } from 'antd';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import WelCome from './components/Welcome';


export default class App extends React.Component {
    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Header SelectedMenu="home" />
                    <WelCome title="Welcome to my shop" />
                </Col>
            </Row>
        );
    }
}


