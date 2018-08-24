/**
 * Created by zjr on 2018/8/22.
 */

import axios from 'axios';
import history from '../history';
import jwtDecode from 'jwt-decode'

function signinUser ({username, password}) {
    return function (dispatch) {
        axios.post('http://localhost:8000/api-auth/', {username, password})
            .then(response => {
                console.log(response)
                const token = response.data.token;
                dispatch({type: 'AUTH_USER', user: jwtDecode(token)});
                localStorage.setItem('jwt', token);
                 history.push('/');
            })
            .catch(() => {
                dispatch({type: 'AUTH_ERROR', payload: '账号或密码错误！'});
            })
    }
};

function signoutUser() {
    localStorage.removeItem('jwt');
    history.push("/");
    return {type: "UNAUTH_USER"};
};

export { signinUser, signoutUser }