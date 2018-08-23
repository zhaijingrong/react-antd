/**
 * Created by zjr on 2018/8/22.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/auth';
import PropTypes from 'prop-types';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    renderAlert() {
        console.log(this.props.errorMessage)
        if (this.props.errorMessage) {
            return (
                <div>
                    { this.props.errorMessage }
                </div>
            )
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signinUser(this.state)
    };

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <h1>Login</h1>
                <div>
                    <lablel>Username</lablel>
                    <input
                        type="text"
                        value={ this.state.username }
                        onChange={ this.onChange }
                        name="username"
                    />
                </div>
                <div>
                    <lablel>Password</lablel>
                    <input
                        type="password"
                        value={ this.state.password }
                        onChange={ this.onChange }
                        name="password"
                    />
                </div>
                <div>
                    { this.renderAlert() }
                    <button>Login</button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.authReducer.error };
}

export default connect(mapStateToProps, { signinUser })(LoginForm);