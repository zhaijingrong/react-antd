/**
 * Created by zjr on 2018/8/17.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class DefaultFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Flow Analyse ©2018 Created by Watone
            </Footer>
        )
    }
}

export default DefaultFooter;
