/**
 * Created by zjr on 2018/8/22.
 */

import axios from 'axios';
import history from '../history';

function signinUser ({username, password}) {
    return function (dispatch) {
        axios.post('http://localhost:8000/api-auth/', {username, password})
            .then(response => {
                console.log(response)
                dispatch({type: 'AUTH_USER'});
                localStorage.setItem('jwt', response.data.token);
                // browserHistory.push("/");
                 history.push('/');
            })
            .catch(() => {
                dispatch({type: 'AUTH_ERROR', payload: 'Bad Login Info'});
            })
    }
};

function signoutUser() {
    localStorage.removeItem('jwt');
    history.push("/");
    return {type: "UNAUTH_USER"};
};

export { signinUser, signoutUser }