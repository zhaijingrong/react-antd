/**
 * Created by zjr on 2018/8/20.
 */

import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import { fetchDomains } from '../actions/domain';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ReactDatePickerTimeList.css';

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

class TopDomain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domain_name: '',
            port: '',
            start_date: moment().subtract(1, 'h'),
            end_date: moment(),
            page: 1,
            page_size: 10,
        };

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.searchDomain = this.searchDomain.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(page, pageSize) {
        this.setState({
            page: page,
        });

        const postDate = {
            ...this.state,
            page: page,
            start_date: this.state.start_date.unix(),
            end_date: this.state.end_date.unix()
        };
        this.props.fetchDomains(postDate);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleStartDateChange(date) {
        this.setState({
            start_date: date
        })
    }

    handleEndDateChange(date) {
        this.setState({
            end_date: date
        })
    }

    searchDomain() {
        const postDate = {
            ...this.state,
            start_date: this.state.start_date.unix(),
            end_date: this.state.end_date.unix()
        };
        this.props.fetchDomains(postDate);
    }

    componentDidMount() {
        const postDate = {
            ...this.state,
            start_date: this.state.start_date.unix(),
            end_date: this.state.end_date.unix()
        };
        this.props.fetchDomains(postDate);
    }

    render() {
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
        }];

        const domains = this.props.results;
        const count = this.props.count;

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
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            value={this.state.domain_name}
                                            onChange={this.handleInputChange}
                                            name="domain_name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 offset-1">
                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-4 col-form-label col-form-label-sm" style={{ paddingRight: '0px'}}>
                                        端口号
                                    </label>
                                    <div className="col-sm-8">
                                        <select
                                            type="text"
                                            className="form-control form-control-sm"
                                            value={this.state.port}
                                            onChange={this.handleInputChange}
                                            name="port"
                                        >
                                            <option value=""> </option>
                                            <option value="80">80</option>
                                            <option value="443">443</option>
                                            <option value="8080">8080</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-2 col-form-label col-form-label-sm" style={{ paddingRight: '0px'}}>
                                        起始时间
                                    </label>
                                    <div className="col-sm-10">
                                        <DatePicker
                                            className="form-control form-control-sm"
                                            selected={this.state.start_date}
                                            showTimeSelect
                                            timeIntervals={60}
                                            utcOffset={+8}
                                            dateFormat="YYYY/MM/DD HH:00"
                                            onChange={this.handleStartDateChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="form-group row">
                                    <label htmlFor="" className="col-sm-2 col-form-label col-form-label-sm" style={{ paddingRight: '0px'}}>
                                        结束时间
                                    </label>
                                    <div className="col-sm-10">
                                        <DatePicker
                                            className="form-control form-control-sm"
                                            selected={this.state.end_date}
                                            showTimeSelect
                                            timeIntervals={60}
                                            dateFormat="YYYY/MM/DD HH:00"
                                            onChange={this.handleEndDateChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <Button onClick={this.searchDomain}>
                                    查询
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div style={{ marginTop: '16px'}}>
                    <Table
                        columns={columns}
                        rowKey={'id'}
                        dataSource={domains}
                        loading={this.props.loading}
                        pagination={{
                            pageSize: this.state.page_size,
                            current: this.state.page,
                            onChange: this.onChangePage,
                            total: count
                        }}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        results: state.domainReducer.results,
        count: state.domainReducer.count,
        loading: state.domainReducer.loading
    }
}

export default connect(mapStateToProps, { fetchDomains })(TopDomain);