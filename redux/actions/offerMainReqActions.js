import { getDashboardConstants } from '../constants';
import { getDashboardService } from '../services';


export const getDashboardAction = {
	get: _get,
	// post: _post,
	// put: _put,
	// delete: _delete,
}


function _get() {
	return dispatch => {
		dispatch(request());
		
		getDashboardService
			.get()
			.then(
				data => dispatch(success(data)),
				error => dispatch(failure(error))
			);
	}

	function request() { 
		return { type: getDashboardConstants.GET_REQUEST } 
	}

	function success(data) { 
		return { type: getDashboardConstants.GET_SUCCESS, data } 
	}

	function failure(error) {
		return { type: getDashboardConstants.GET_FAILURE, error }
	}
}