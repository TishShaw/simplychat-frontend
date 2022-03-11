import React from 'react';
import { Button } from 'bootstrap-4-react/lib/components';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
// import { addToCart } from '../../redux/actions';

function CartBtn({ addToCart , item}) {
	const dispatch = useDispatch();

	return (
		<Button dark sm outline onClick={addToCart}>
			<Link to={`/cart/:id?`}>Add to Cart</Link>
		</Button>
	);
}

export default CartBtn;
