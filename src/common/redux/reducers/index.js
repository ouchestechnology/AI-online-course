import { combineReducers } from 'redux';
import CourseReducer from './CourseReducer';

export default combineReducers({
    course: CourseReducer
});