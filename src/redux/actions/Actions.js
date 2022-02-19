import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
} from '../constants/Constants';
import axios from 'axios';

export const allProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_LIST_REQUEST });

		const data  = await axios.get('http://localhost:8000/shop/')
		.then(data => {
			return data.data
		})
		console.log(data);

		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		});

	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
