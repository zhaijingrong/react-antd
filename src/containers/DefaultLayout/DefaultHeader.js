/**
 * Created by zjr on 2018/8/17.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class DefaultHeader extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} />
        )
    }
}

export default DefaultHeader;