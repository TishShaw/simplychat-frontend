import axios from 'axios';
import { ADD_TO_CART } from '../../constants/cartConstants';

export const addToCart = (id) => async (dispatch, getState) => {
	const { data } = await axios.get(
		`https://secret-beyond-07972.herokuapp.com/shop/${id}`
	);

	dispatch({
		type: ADD_TO_CART,
		payload: {
			product: data.id,
			name: data.item,
			image: data.image,
			price: data.price,
			description: data.description,
			reviews: data.reviews,
			availability: data.is_active,
			category: data.category_name,
		},
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cartItems));
};
