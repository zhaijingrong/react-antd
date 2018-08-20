/**
 * Created by zjr on 2018/8/17.
 */

import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class DefaultSider extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Sider collapsible collapsed={ this.state.collapsed } onCollapse={this.onCollapse}>
                <div className="logo">
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        概览
                        <NavLink to="/">概览</NavLink>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="area-chart" /><span>流量流向</span></span>}>
                        <Menu.Item key="3">
                            <NavLink to="/topDomain">Top域名</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to="/topDst">Top目标</NavLink>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <NavLink to="/topPort">Top端口</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    {/*<SubMenu*/}
                        {/*key="sub2"*/}
                        {/*title={<span><Icon type="team" /><span>内容分析</span></span>}>*/}
                        {/*<Menu.Item key="6">Team 1</Menu.Item>*/}
                        {/*<Menu.Item key="7">Team 2</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    <SubMenu
                        key="sub3"
                        title={<span><Icon type="team" /><span>系统维护</span></span>}>
                        <Menu.Item key="8">
                            <NavLink to="/users">用户管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <NavLink to="/systemStatus">系统状态</NavLink>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default DefaultSider;