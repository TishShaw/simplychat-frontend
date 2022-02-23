import React from 'react';
import { Button } from 'bootstrap-4-react/lib/components';
import { useDispatch} from 'react-redux';

function CartBtn(item) {
	const dispatch = useDispatch();

	const addToCart = () => {
		console.log('cart');
		dispatch({ type: 'ADD_TO_CART', payload: item });
	};

	return (
		<Button dark md outline onClick={() => addToCart(item)}>
			{' '}
			Add to Cart
		</Button>
	);
}

export default CartBtn;
