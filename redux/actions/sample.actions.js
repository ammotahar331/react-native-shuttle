import { sampleConstants } from '../constants';
import { sampleServices } from '../services';


export const sampleActions = {
	get: _get,
	// post: _post,
	// put: _put,
	// delete: _delete,
}


function _get() {
	return dispatch => {
		dispatch(request());
		
		sampleServices
			.get()
			.then(
				data => dispatch(success(data)),
				error => dispatch(failure(error))
			);
	}

	function request() { 
		return { type: sampleConstants.GET_REQUEST } 
	}

	function success(data) { 
		return { type: sampleConstants.GET_SUCCESS, data } 
	}

	function failure(error) {
		return { type: sampleConstants.GET_FAILURE, error }
	}
}