/**
 * Created by zjr on 2018/8/17.
 */
import React, { Component } from 'react';
import DefaultHeader from './DefaultHeader';
import DefaultSider from './DefaultSider';
import DefaultFooter from './DefaultFooter';
import { Layout } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard, TopDst, TopDomain, TopPort } from '../../components';

const Content = Layout;

class DefaultLayout extends Component {
    render() {
        return (
            <BrowserRouter>
            <Layout style={{ minHeight: '100vh' }}>
                <DefaultSider/>
                <Layout>
                    <DefaultHeader/>
                    <Layout style={{ padding: '16px 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                                <div>
                                    <Route exact path="/" name="Home" component={Dashboard} />
                                    <Route exact path="/topDomain" name="TopDomain" component={TopDomain} />
                                    <Route exact path="/topPort" name="TopPort" component={TopPort} />
                                    <Route exact path="/topDst" name="TopDst" component={TopDst} />
                                </div>
                        </Content>
                    </Layout>
                    <DefaultFooter/>
                </Layout>
            </Layout>
                </BrowserRouter>
        );
    };
}

export default DefaultLayout;