import axios from 'axios';
import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	GET_CART_TOTAL,
	SAVE_SHIPPING_ADDRESS,
} from '../../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(
		`https://keitabeautybackend-a0275470644f.herokuapp.com/shop/${id}`
	);
	console.log('data', data);

	dispatch({
		type: ADD_TO_CART,
		payload: {
			product: data.id,
			name: data.item,
			image: data.image,
			price: data.price,
			reviews: data.reviews,
			count_inStock: data.count_inStock,
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

export const getCartTotal = (data) => (dispatch) => {
	console.log('getCartTotal', data);
	dispatch({
		type: GET_CART_TOTAL,
		payload: data,
	});

	localStorage.setItem('shippingAdress', JSON.stringify(data));
};

export const saveShippingAddress = (data) => (dispatch) => {
	dispatch({
		type: SAVE_SHIPPING_ADDRESS,
		payload: data,
	});

	localStorage.setItem('shippingAdress', JSON.stringify(data));
};
