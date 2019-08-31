import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';

import 'antd/dist/antd.min.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.SelectedMenu
        }
        this.menuItemClick = this.menuItemClick.bind(this);
    }
    menuItemClick(e) {
        //e.preventDefault;
        console.log(this);
        this.setState({
            current: e.key
        });
    }
    render() {

        return (

            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" onClick={this.menuItemClick}>
                <Menu.Item key="mail">
                    <Icon type="mail" />
                    Navigation One
                 </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore" />
                    Navigation Two
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="setting" />
                            Navigation Three - Submenu
                        </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>


        );
    }
}
