import React from 'react';
import { Button } from 'bootstrap-4-react/lib/components';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

function CartBtn({ id }) {
	console.log(id);
	const navigate = useNavigate();
	const [searchParms] = useSearchParams();
	const qty = Number(searchParms.get('qty'));

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	console.log(cartItems);

	const handleAddToCart = (id) => {
		if(qty) return 1;
		navigate(`/cart/${id}?qty=${qty}`);
	};

	return (
		<Button onClick={() => handleAddToCart(id)} dark sm outline>
			Add to Cart
		</Button>
	);
}

export default CartBtn;
