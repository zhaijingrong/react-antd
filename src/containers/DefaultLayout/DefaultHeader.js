/**
 * Created by zjr on 2018/8/17.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import { Menu, Dropdown, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
        <NavLink to="/logout">注销</NavLink>
    </Menu.Item>
  </Menu>
);

class DefaultHeader extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} >
              <span className="float-right" style={{ paddingRight: '40px' }}>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link">
                        {this.props.user.username} <Icon type="user" /> <Icon type="down" />
                    </a>
                </Dropdown>
              </span>
            </Header>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.authReducer.user
    }
}


export default connect(mapStateToProps)(DefaultHeader);