import React from 'react';
import { Button } from 'bootstrap-4-react/lib/components';
import { useDispatch} from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function CartBtn(item) {
	const dispatch = useDispatch();
	const {id} = useParams()

	const addToCart = () => {
		console.log('cart');
		dispatch({ type: 'ADD_TO_CART', payload: item });
	};

	return (
		<Button dark sm outline onClick={() => addToCart(item)}>
		
			<Link to={`/shop/cart/${id}`}>Add to Cart</Link>
		</Button>
	);
}

export default CartBtn;
