/**
 * Created by zjr on 2018/8/22.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Row, Icon, Col, message } from 'antd';
import validateInput from '../../utils/validations/login';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
        }
    }

    isValid = () => {
        const { errors, isValid } = validateInput(this.stata);
        if(!isValid) {
            this.setState({ errors });
        }

        return isValid
    };

    renderAlert = () =>{
        if (this.props.errorMessage) {
            return (
                message.error(this.props.errorMessage)
            );
        }
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.props.signinUser(this.state);
        }
    };

    render() {
        return (
            <div>
                {this.renderAlert()}
                <Row style={{ paddingTop:'100px', align: 'center'}}>
                    <Col span={8} offset={8}>
                      <div style={{ background: '#eee', padding: '20px' }}>
                          <form onSubmit={ this.onSubmit }>
                             <h3 style={{ textAlign: 'center' }}>登录系统</h3>
                             <div className="form-group">
                                 <div className="input-group">
                                     <span className="input-group-addon" id="basic-addon1">
                                         <Icon type="user" />
                                     </span>
                                     <input
                                         type="text"
                                         value={ this.state.username }
                                         onChange={ this.onChange }
                                         name="username"
                                         className="form-control"
                                         placeholder="请输入用户名"
                                     />
                                 </div>
                             </div>
                              <div className="form-group">
                                  <div className="input-group">
                                     <span className="input-group-addon" id="basic-addon1">
                                         <Icon type="lock" />
                                     </span>
                                     <input
                                         type="password"
                                         value={ this.state.password }
                                         onChange={ this.onChange }
                                         name="password"
                                         className="form-control"
                                         placeholder="请输入密码"
                                     />
                                 </div>
                              </div>

                             <div style={{ marginTop: '10px', textAlign: 'right'}}>
                                 <button className="btn btn-primary">登录</button>
                             </div>
                          </form>
                      </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.authReducer.error };
}

export default connect(mapStateToProps, { signinUser })(Signin);
