/**
 * Created by zjr on 2018/8/22.
 */
import { combineReducers } from 'redux';
import authReducer from './authReducer'
import domainReducer from './domainReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
    authReducer,
    domainReducer,
});

export default rootReducer;