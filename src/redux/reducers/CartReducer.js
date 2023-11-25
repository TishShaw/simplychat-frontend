import { produce } from 'immer';

import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	SAVE_SHIPPING_ADDRESS,
	GET_CART_TOTAL,
	CLEAR_SHOPPING_CART,
} from '../constants/cartConstants';

const initialState = {
	cartItems: [],
	shippingAddress: {},
	cartTotal: 0,
};

export const cartReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case ADD_TO_CART: {
				const cartItem = action.payload;
				const existingItemIndex = draft.cartItems.findIndex(
					(x) => x.product === cartItem.product
				);

				if (existingItemIndex !== -1) {
					draft.cartItems[existingItemIndex] = cartItem;
				} else {
					draft.cartItems.push(cartItem);
				}
				break;
			}

			case DELETE_FROM_CART:
				draft.cartItems = draft.cartItems.filter(
					(item) => item.product !== action.payload
				);
				break;

			case GET_CART_TOTAL:
				draft.cartTotal = draft.cartItems.reduce(
					(acc, item) => acc + item.qty * item.price,
					0
				);
				break;

			case SAVE_SHIPPING_ADDRESS:
				draft.shippingAddress = action.payload;
				break;

			case CLEAR_SHOPPING_CART:
				draft.cartItems = [];
				break;

			default:
				break;
		}
	});
};
