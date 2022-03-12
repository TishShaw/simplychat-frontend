import {
	GET_ALL_PRODUCTS_SUCCESSFUL,
	GET_ALL_PRODUCTS_FAILED,
	GET_ALL_PRODUCTS_REQUEST,
	GET_PRODUCTS_DETAILS_REQUEST,
	GET_PRODUCTS_DETAILS_SUCCESSFUL,
	GET_PRODUCTS_DETAILS_FAILED,

	CREATE_PRODUCT_REVIEW_REQUEST,
	CREATE_PRODUCT_REVIEW_SUCCESSFUL,
	CREATE_PRODUCT_REVIEW_FAILED,
	CREATE_PRODUCT_REVIEW_RESET,
} from '../constants/productConstants';

export const productsReducer = (state = {products: []}, action) => {
	switch (action.type) {
		case GET_ALL_PRODUCTS_REQUEST:
			return { loading: true, products: [] };
		case GET_ALL_PRODUCTS_SUCCESSFUL:
			return { loading: false, products: action.payload };

		case GET_ALL_PRODUCTS_FAILED:
			return { loading: false, products: action.payload };

		default:
			return state;
	}
};

export const productsDetailsReducer = (state = {product : {reviews: []}}, action) => {
	switch (action.type) {
		case GET_PRODUCTS_DETAILS_REQUEST:
			return { loading: true, ...state };
		case GET_PRODUCTS_DETAILS_SUCCESSFUL:
			return { loading: false, product: action.payload };

		case GET_PRODUCTS_DETAILS_FAILED:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const productReviewReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_PRODUCT_REVIEW_REQUEST:
			return { loading: true };

		case CREATE_PRODUCT_REVIEW_SUCCESSFUL:
			return { loading: false, success: true };

		case CREATE_PRODUCT_REVIEW_FAILED:
			return { loading: false, error: action.payload };

		case CREATE_PRODUCT_REVIEW_RESET:
			return {};

		default:
			return state;
	}
}