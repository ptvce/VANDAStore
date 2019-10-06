import React, { Component } from 'react';
import { Row, Col, Button, Form, Input } from 'antd';


import Header from './Header';
import WelCome from './Welcome';

const FormItem = Form.Item;

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formBody: {
                name: '',
                email: '',
                message: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target);
        const target = event.target;
        const name = target.name;
        const value = target.type == 'checkbox' ? arguments.checked : target.value;

        this.state.formBody[name] = value;
        // this.setState((prevState) => {
        //     formBody: prevState.formBody
        // })

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.formBody);

    }
    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Header SelectedMenu="morepage:contact" />
                    <WelCome title="Welcome to my Contact page" />
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <h2>Contact Form</h2>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="Name">
                                    <Input type="text" name="name" placeholder="Please enter your name" value={this.state.formBody.name} onChange={this.handleChange} />
                                </FormItem>
                                <FormItem label="E-mail">
                                    <Input type="text" name="email" placeholder="Please enter your email" value={this.state.formBody.email} onChange={this.handleChange} />
                                </FormItem>
                                <FormItem label="Message">
                                    <Input type="text" name="message" placeholder="Please enter your message" value={this.state.formBody.message} onChange={this.handleChange} />
                                </FormItem>
                                <FormItem label="Name">
                                    <Button type="primary" htmlType="submit">Send</Button>
                                </FormItem>
                            </Form>
                        </Col>

                    </Row>
                </Col>
            </Row>
        );
    }
}

