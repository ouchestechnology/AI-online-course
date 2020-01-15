import {combineReducers } from 'redux'
import ServiceReducer from './../src/common/redux/reducers/index';

export default combineReducers({
    fleskService: ServiceReducer
});