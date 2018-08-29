/**
 * Created by zjr on 2018/8/27.
 */

const INITIAL_STATE = {
    results: null,
    count: null,
    error: null,
    loading: true
};

const domainReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_DOMAINS_SUCCESS':
            return {
                ...state,
                results: action.payload.results,
                count: action.payload.count,
                loading: false
            };
        case 'FETCH_DOMAINS_REQUEST':
            return {...state, loading: true };
        default:
            return state;
    }
};

export default domainReducer;