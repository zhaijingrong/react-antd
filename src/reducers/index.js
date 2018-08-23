/**
 * Created by zjr on 2018/8/22.
 */
import { combineReducers } from 'redux';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    authReducer,
});

export default rootReducer;