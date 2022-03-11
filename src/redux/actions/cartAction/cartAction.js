import axios from 'axios';
import { ADD_TO_CART, DELETE_FROM_CART } from '../../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(
		` https://desolate-brushlands-04983.herokuapp.com/shop/${id}`
	);

	dispatch({
		type: ADD_TO_CART,
		payload: {
			product: data.id,
			name: data.item,
			image: data.image,
			price: data.price,
			reviews: data.reviews,
			countInStock: data.countInStock,
			qty,
		},
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: DELETE_FROM_CART,
		payload: id,
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};