/**
 * Created by zjr on 2018/8/17.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import { Menu, Dropdown, Icon, message } from 'antd';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';

const { Header } = Layout;

const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>
        <NavLink to="/logout">退出</NavLink>
    </Menu.Item>
    {/*<Menu.Item>2nd menu item</Menu.Item>*/}
    {/*<SubMenu title="sub menu">*/}
      {/*<Menu.Item>3rd menu item</Menu.Item>*/}
      {/*<Menu.Item>4th menu item</Menu.Item>*/}
    {/*</SubMenu>*/}
    {/*<SubMenu title="disabled sub menu" disabled>*/}
      {/*<Menu.Item>5d menu item</Menu.Item>*/}
      {/*<Menu.Item>6th menu item</Menu.Item>*/}
    {/*</SubMenu>*/}
  </Menu>
);

class DefaultHeader extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} >
                <Row type="flex" justify="space-between" align="middle">
                    <Col span={4}>

                    </Col>
                    <Col span={4}>
                          <div>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link">
                                  username <Icon type="down" />
                                </a>
                            </Dropdown>
                          </div>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default DefaultHeader;