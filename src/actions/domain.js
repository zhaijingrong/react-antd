/**
 * Created by zjr on 2018/8/27.
 */

import axios from 'axios';
import history from '../history';

function fetchDomains(postData) {
    return function (dispatch) {
        console.log(postData);
        axios.get('http://localhost:8000/api/domain/', {})
            .then((response) => {
                dispatch({
                    type: 'FETCH_DOMAINS',
                    payload: response.data
                })
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    history.push('/login')
                }
            })
    }
}

export { fetchDomains };