/**
 * Created by zjr on 2018/8/17.
 */
import React, { Component } from 'react';
import DefaultHeader from './DefaultHeader';
import DefaultSider from './DefaultSider';
import DefaultFooter from './DefaultFooter';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dashboard, TopDst, TopDomain, TopPort } from '../../components';
import RequireAuth from '../../components/auth/requireAuth';

const Content = Layout;

class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <DefaultSider/>
                    <Layout>
                        <DefaultHeader/>
                        <Layout style={{ padding: '16px 24px 24px' }}>
                            <Content style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                                <Switch>
                                    <Route exact path="/dashboard" name="Dashboard" component={RequireAuth(Dashboard)} />
                                    <Route exact path="/topDomain" name="TopDomain" component={RequireAuth(TopDomain)} />
                                    <Route exact path="/topPort" name="TopPort" component={RequireAuth(TopPort)} />
                                    <Route exact path="/topDst" name="TopDst" component={RequireAuth(TopDst)} />
                                    <Redirect from="/" to="/dashboard" />
                                </Switch>
                            </Content>
                        </Layout>
                        <DefaultFooter/>
                    </Layout>
                </Layout>
            </div>
        );
    };
}

export default DefaultLayout;