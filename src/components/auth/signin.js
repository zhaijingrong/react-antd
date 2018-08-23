/**
 * Created by zjr on 2018/8/22.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/auth';
import PropTypes from 'prop-types';

class Signin extends Component {
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

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.signinUser(this.state);
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
                    <button>Login</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { signinUser })(Signin);
