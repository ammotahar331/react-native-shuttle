import { headers, urls } from '../config';


export const getDashboardService = {
	get: _get,
	// post: _post,
	// put: _put,
	// delete: _delete,
}


function _get() {
	const requestOptions = {
		method: "POST",
        headers: headers.getDashboardHeader,
        body: JSON.stringify({
            "refresh": true
        })
	}

	return fetch(urls.getDashboardUrl, requestOptions).then(handleResponse);
}


function handleResponse(response) {
	return response.json().then(responseJson =>{
		// if(!response.ok) {

		// 	switch(response.status) {
		// 		case 401:
		// 			console.error("Debug:: Permission Denial from API");
		// 			break;
		// 		case 500:
		// 			console.warn("Debug:: Server Problem");
		// 			break;
		// 		default:
		// 			console.warn("debug: Unknown status code");
		// 	}

		// 	const error = (data && data.message) || response.statusText;
		// 	return Promise.reject(error);
		// }

		return responseJson;

	})
}