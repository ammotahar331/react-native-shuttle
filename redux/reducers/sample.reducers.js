import { sampleConstants } from '../constants';


export function sample(state = {/* Initial State */}, action) {
	switch(action.type) {
		case sampleConstants.GET_REQUEST:
			return {
				loading: true,
			}
		case sampleConstants.GET_SUCCESS:
			return {
				list: action.data,
				loading: false,
			}
		case sampleConstants.GET_FAILURE:
			return {
				error: action.error,
				loading: false,
			}
		default:
			return state;
	}
}