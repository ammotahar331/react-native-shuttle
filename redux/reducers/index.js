import { combineReducers } from 'redux';
import { friendReducer } from './FriendReducer';
import { dashboardData } from './offerMainReqRducers';

export default combineReducers({
    friends: friendReducer,
    dashboardData: dashboardData,
});