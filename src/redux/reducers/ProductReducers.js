import { GET_PRODUCTS } from '../constants/productConstants';

const initialState = {
	products: [],
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS: {
			return {
				...state,
				products: [...state.products, action.payload],
			};
		}
		default:
			return state;
	}
};
