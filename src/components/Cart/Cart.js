import React, { useContext } from 'react';
import { Button } from 'bootstrap-4-react/lib/components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../../Context';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart(props) {
	const cartItems = useSelector((state) => state.cartReducer.cartItems);
	console.log(cartItems);

	if (!cartItems) {
		return '';
	}
	return (
		<div className='row top'>
			<div className='col-2'>
				<h1 className='cart-title'>Your Bag</h1>
				{cartItems.map((item) => {
					console.log(item);
					return (
						<div key={item.itemid} className='row'>
							<CartItem item={item.item} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Cart;
