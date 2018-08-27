/**
 * Created by zjr on 2018/8/27.
 */

const INITIAL_STATE = {
    domains: null
};

const domainReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_DOMAINS':
            return {...state, domains: action.payload };
        default:
            return state;
    }
};

export default domainReducer;