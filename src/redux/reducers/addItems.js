const cartItem = [];

const addCartItems = (state = cartItem, action) => {
    switch (action.type) {
			case 'ADD_ITEM':
				return [...state, action.payload];
				break;

			case 'DELETE_ITEM':
				return state = state.filter((x) => {
                    return x.id !== action.payload
                });
				break;
		}

}