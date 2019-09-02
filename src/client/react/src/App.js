import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import WelCome from './components/Welcome';


import About from './components/About';
import Contact from './components/Contact';



export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <WelCome title="Welcome to my shop" />
                        <Header SelectedMenu="home" />
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                        </Switch>

                    </Col>


                </Row>
            </Router>
        );
    }
}


