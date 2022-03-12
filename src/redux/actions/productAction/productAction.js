import {
    GET_ALL_PRODUCTS_REQUEST,
	GET_ALL_PRODUCTS_SUCCESSFUL,
	GET_ALL_PRODUCTS_FAILED,

    GET_PRODUCTS_DETAILS_REQUEST,
    GET_PRODUCTS_DETAILS_SUCCESSFUL,
    GET_PRODUCTS_DETAILS_FAILED,

    CREATE_PRODUCT_REVIEW_REQUEST,
	CREATE_PRODUCT_REVIEW_SUCCESSFUL,
	CREATE_PRODUCT_REVIEW_FAILED,

} from '../../constants/productConstants';

import axios from 'axios';

export const getProducts = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_PRODUCTS_REQUEST });

		const { data } = await axios.get(
			'https://desolate-brushlands-04983.herokuapp.com/shop/'
		);
        console.log(data);

		dispatch({
			type: GET_ALL_PRODUCTS_SUCCESSFUL,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_PRODUCTS_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};



export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_PRODUCTS_DETAILS_REQUEST });

		const { data } = await axios.get(
			`https://desolate-brushlands-04983.herokuapp.com/shop/${id}`
		);
		console.log(data);

		dispatch({
			type: GET_PRODUCTS_DETAILS_SUCCESSFUL,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_PRODUCTS_DETAILS_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};


export const createProductReviews = (id, reviews) => async (dispatch, getState) => {
	try {
		dispatch({ type: CREATE_PRODUCT_REVIEW_REQUEST });


        const config={
            headers: {
                'Content-type': 'application/json',
                
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        }

		const { data } = await axios.post(
			`https://desolate-brushlands-04983.herokuapp.com/shop/review/${id}`,
            reviews,
            config
		);
		console.log(data);

		dispatch({
			type: CREATE_PRODUCT_REVIEW_SUCCESSFUL,
			payload: data,
		});

	} catch (error) {
		dispatch({
			type: CREATE_PRODUCT_REVIEW_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};
