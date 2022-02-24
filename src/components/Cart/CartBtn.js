import React from 'react';
import { Button } from 'bootstrap-4-react/lib/components';
import { useDispatch} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import { addToCart } from '../../redux/actions';

function CartBtn({item}) {
	const dispatch = useDispatch();
	console.log(item.id);

	const addToCart = () => {
		console.log('cart');
		dispatch({ type: 'ADD_TO_CART', payload: item });
	};


	return (
		<Button dark sm outline onClick={() => addToCart(item)}>
		
			<Link to={`/cart/${item.id}`}>Add to Cart</Link>
		</Button>
	);
}

export default CartBtn;
