import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './styles/Cart.style.css';

const CartBtn = ({ id }) => {
	const navigate = useNavigate();
	const [searchParms] = useSearchParams();
	const qty = Number(searchParms.get('qty'));

	const handleAddToCart = (id) => {
		if (qty) return 1;
		navigate(`/cart/${id}?qty=${qty}`);
	};

	return (
		<button outline onClick={() => handleAddToCart(id)} className='addBtn'>
			Add to Cart
		</button>
	);
};

export default CartBtn;
