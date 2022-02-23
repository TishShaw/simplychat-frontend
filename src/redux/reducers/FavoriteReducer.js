const initialstate = {
	favoriteItems: [],
};

export const favoriteReducer = (state = initialstate, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITES': {
			return {
				...state,
				favoriteItems: [...state.cartItems, action.payload],
			};
		}

		default:
			return state;
	}
};
