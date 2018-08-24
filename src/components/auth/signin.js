/**
 * Created by zjr on 2018/8/22.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/auth';
import { Row, Icon, Col } from 'antd';
import validateInput from '../../utils/validations/login';
import classnames from 'classnames';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false,
        }
    }

    isValid = () => {
        const { errors, isValid } = validateInput(this.state);
        console.log(errors)
        if(!isValid) {
            this.setState({ errors });
        }

        return isValid
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.signinUser(this.state);
        }
        this.setState({ isLoading: false})
    };

    render() {
        const errors = this.state.errors;
        return (
                <Row style={{ paddingTop:'100px', align: 'center'}}>
                    <Col span={8} offset={8}>
                      <div style={{ background: '#eee', padding: '20px' }}>
                          <form onSubmit={ this.onSubmit }>
                              { this.props.errorMessage && <div className="alert alert-danger">{ this.props.errorMessage }</div>}
                             <h3 style={{ textAlign: 'center' }}>登录系统</h3>
                             <div className="form-group">
                                 <div className="input-group">
                                     <div className="input-group-prepend">
                                         <span className="input-group-text" id="basic-addon1">
                                            <Icon type="user" />
                                         </span>
                                     </div>
                                     <input
                                         type="text"
                                         value={ this.state.username }
                                         onChange={ this.onChange }
                                         name="username"
                                         className={ classnames('form-control', { 'is-invalid': errors.username })}
                                         placeholder="请输入用户名"
                                     />
                                 </div>
                                 {errors.username && <span className="form-text text-muted">{ errors.username }</span> }
                             </div>
                              <div className="form-group">
                                  <div className="input-group">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="basic-addon1">
                                            <Icon type="lock" />
                                          </span>
                                      </div>
                                     <input
                                         type="password"
                                         value={ this.state.password }
                                         onChange={ this.onChange }
                                         name="password"
                                         className={ classnames('form-control', { 'is-invalid': errors.password })}
                                         placeholder="请输入密码"
                                     />
                                 </div>
                                  {errors.password && <span className="form-text text-muted">{ errors.password }</span> }
                              </div>

                             <div style={{ marginTop: '10px', textAlign: 'right'}}>
                                 <button disabled={ this.state.isLoading } className="btn btn-primary">登录</button>
                             </div>
                          </form>
                      </div>
                    </Col>
                </Row>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.authReducer.error };
}

export default connect(mapStateToProps, { signinUser })(Signin);
