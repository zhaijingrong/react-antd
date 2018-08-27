/**
 * Created by zjr on 2018/8/20.
 */

import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import { fetchDomains } from '../actions/domain';

const columns = [{
    key: 'domain_name',
    title: '域名',
    dataIndex: 'domain_name',
}, {
    key: 'upload_flow',
    title: '上行流量',
    dataIndex: 'upload_flow',
}, {
    key: 'download_flow',
    title: '下行流量',
    dataIndex: 'download_flow',
},{
    key: 'total_flow',
    title: '总流量',
    dataIndex: 'total_flow',
}];


class TopDomain extends Component {
    componentWillMount() {
        this.props.fetchDomains();
    }

    state = {
        selectedRowKeys: [],
        loading: false,
    };

    start = () => {
        this.setState( {loading: true} );
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000)
    };

    onSelectChange = (selectedRowKeys) => {
        console.log('selectRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys })
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}>
                        Reload
                    </Button>
                    <span>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : '' }
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} rowKey={'id'} dataSource={this.props.domains} size="small" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        domains: state.domainReducer.domains,
    }
}

export default connect(mapStateToProps, { fetchDomains })(TopDomain);