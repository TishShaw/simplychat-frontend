export const addItemToCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product

    }
}

export const deleteItemToCart = (product) => {
	return {
		type: 'DELETE_ITEM',
		payload: product,
	};
};