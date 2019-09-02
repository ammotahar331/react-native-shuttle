import { combineReducers } from 'redux';
import { friendReducer } from './FriendReducer';

export default combineReducers({
    friends: friendReducer,
});