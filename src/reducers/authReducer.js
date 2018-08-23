/**
 * Created by zjr on 2018/8/22.
 */

const initialState = {
    authenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_USER':
            return {...state, error: '', authenticated: true};
        case 'UNAUTH_USER':
            return { ...state, error: '', authenticated: false};
        case 'AUTH_ERROR':
            return { ...state, error: action.payload};
        case 'FETCH_MESSAGE':
            return { ...state, message: action.payload};
        default:
            return state;
    }
};

export default authReducer;