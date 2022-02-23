const cartItem = [];
const favorites = [];

export const addCartItems = (state = cartItem, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.payload];
			break;

		case 'DELETE_ITEM':
			return (state = state.filter((x) => {
				return x.id !== action.payload;
			}));
			break;
	}
};

export const addFavoriteItems = (state = favorites, action) => {
	switch (action.type) {
		case 'ADD_FAV_ITEM':
			return [...state, action.payload];
			break;

		case 'DELETE_FAV_ITEM':
			return (state = state.filter((x) => {
				return x.id !== action.payload;
			}));
			break;
	}
};
