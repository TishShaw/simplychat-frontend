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
	REMOVE_PRODUCT_REVIEW_SUCCESSFUL,
	UPDATE_PRODUCT_REVIEW,
} from '../../constants/productConstants';

import axios from 'axios';

export const getProducts = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_PRODUCTS_REQUEST });

		const { data } = await axios.get('http://127.0.0.1:8000/shop/');
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

		const { data } = await axios.get(`http://127.0.0.1:8000/shop/${id}`);

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

export const removeProductReview = (id, token) => async (dispatch) => {
	try {
		console.log(token);
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Token ${token}`,
			},
		};

		dispatch({ type: GET_PRODUCTS_DETAILS_REQUEST });
		console.log(token);
		const { data } = await axios.delete(
			`http://127.0.0.1:8000/shop/review/${id}`,
			config
		);

		dispatch({
			type: REMOVE_PRODUCT_REVIEW_SUCCESSFUL,
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

export const createProductReviews =
	(id, token, newReview) => async (dispatch, getState) => {
		try {
			dispatch({ type: CREATE_PRODUCT_REVIEW_REQUEST });

			const config = {
				headers: {
					'Content-type': 'application/json',
					Authorization: `Token ${token}`,
				},
			};

			const { data } = await axios.post(
				`http://127.0.0.1:8000/shop/review/`,
				newReview,
				config
			);

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

export const editProductReview = (id, token, newReview) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Token ${token}`,
			},
		};

		dispatch({ type: GET_PRODUCTS_DETAILS_REQUEST });

		const { data } = await axios.put(
			`http://127.0.0.1:8000/shop/review/${id}`,
			config,
			newReview
		);

		dispatch({
			type: UPDATE_PRODUCT_REVIEW,
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
