import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction/cartAction';
import './styles/Cart.style.css';

const CartBtn = ({ id }) => {
	const dispatch = useDispatch();
	const [searchParms] = useSearchParams();
	const qty = Number(searchParms.get('qty'));
	console.log(qty);

	const handleAddToCart = (id) => {
		if (qty <= 0) return 1;
		dispatch(addToCart(id, qty));
	};

	return (
		<button outline onClick={() => handleAddToCart(id)} className='addBtn'>
			Add to Cart
		</button>
	);
};

export default CartBtn;
