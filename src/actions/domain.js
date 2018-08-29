/**
 * Created by zjr on 2018/8/27.
 */

import axios from 'axios';
import history from '../history';

function fetchDomains(postData) {
    return function (dispatch) {
        dispatch({
            type: 'FETCH_DOMAINS_REQUEST',
        });
        axios.get('http://localhost:8000/api/domain/', { params: postData})
            .then((response) => {
                dispatch({
                    type: 'FETCH_DOMAINS_SUCCESS',
                    payload: response.data,
                    loading: false,
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