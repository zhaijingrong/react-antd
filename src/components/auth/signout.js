/**
 * Created by zjr on 2018/8/23.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/auth';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return(
            <div>Signed out!</div>
        );
    }
}

export default connect(null, { signoutUser })(Signout);