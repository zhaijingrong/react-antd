/**
 * Created by zjr on 2018/8/27.
 */

const INITIAL_STATE = {
    domains: null,
    error: null,
    loading: true
};

const domainReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_DOMAINS_SUCCESS':
            return {...state, domains: action.payload, loading: false };
        case 'FETCH_DOMAINS_REQUEST':
            return {...state, domains: null, loading: true };
        default:
            return state;
    }
};

export default domainReducer;