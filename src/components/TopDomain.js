/**
 * Created by zjr on 2018/8/20.
 */

import React, { Component } from 'react';
import { Table } from 'antd';
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
},{
    key: 'port',
    title: '端口号',
    dataIndex: 'port',
},];


class TopDomain extends Component {
    componentWillMount() {
        this.props.fetchDomains();
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#f7f7f9', padding: '10px' }}>
                    <form action="">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-4 col-form-label col-form-label-sm" style={{ paddingRight: '0px'}}>
                                        域名
                                    </label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control form-control-sm"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 offset-1">
                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-4 col-form-label col-form-label-sm" style={{ paddingRight: '0px'}}>
                                        端口号
                                    </label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control form-control-sm"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-4 col-form-label col-form-label-sm" style={{ paddingRight: '0px'}}>
                                        起始时间
                                    </label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control form-control-sm"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 offset-1">
                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-4 col-form-label col-form-label-sm" style={{ paddingRight: '0px'}}>
                                        结束时间
                                    </label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control form-control-sm"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div style={{ marginTop: '16px'}}>
                    <Table columns={columns} rowKey={'id'} dataSource={this.props.domains} />
                </div>
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