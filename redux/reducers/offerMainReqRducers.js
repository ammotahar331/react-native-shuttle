import { getDashboardConstants } from '../constants';


export function dashboardData(state = {/* Initial State */}, action) {
	switch(action.type) {
		case getDashboardConstants.GET_REQUEST:
			return {
				loading: true,
			}
		case getDashboardConstants.GET_SUCCESS:
			return {
				list: action.data,
				loading: false,
			}
		case getDashboardConstants.GET_FAILURE:
			return {
				error: action.error,
				loading: false,
			}
		default:
			return state;
	}
}