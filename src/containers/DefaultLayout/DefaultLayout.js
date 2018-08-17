/**
 * Created by zjr on 2018/8/17.
 */
import React, { Component } from 'react';
import DefaultHeader from './DefaultHeader';
import DefaultSider from './DefaultSider';
import DefaultFooter from './DefaultFooter';
import { Layout, Breadcrumb } from 'antd';

const Content = Layout;

class DefaultLayout extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <DefaultSider/>
                <Layout>
                    <DefaultHeader/>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            Content
                        </Content>
                    </Layout>
                    <DefaultFooter/>
                </Layout>
            </Layout>
        );
    };
}

export default DefaultLayout;