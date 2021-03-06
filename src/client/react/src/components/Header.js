import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.min.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.SelectedMenu
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        // e.preventDefault();
        this.setState({
            current: e.key
        });
    }

    render() {

        return (

            <Menu className="menu" onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="home" /> <Link style={{ display: 'inline-block' }} to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="appstore" /> <Link style={{ display: 'inline-block' }} to="/products">Products</Link>
                </Menu.Item>
                <Menu.Item key="alipay">
                    <a href="https://roocket.ir" target="_blank">Example - Link</a>
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />More Page</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="morepage:about"><Link to="/about">About Page</Link></Menu.Item>
                        <Menu.Item key="morepage:contact"><Link to="/contact">Contact Page</Link></Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>

        );
    }
}

