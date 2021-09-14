import counterReducer from './counter';
import authReducer from './auth';
import {combineReducers} from 'redux';

export default combineReducers({
   counter:counterReducer,
   auth:authReducer
});
