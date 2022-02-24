import React from 'react';
import { Button } from 'bootstrap-4-react/lib/components';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './styles/Cart.style.css';

function Cart(props) {
	const cartItems = useSelector((state) => state.cartReducer.cartItems);
	console.log(cartItems);


	if(!cartItems) {
		return null;
	}
	return (
		<div className='container'>
			<div className='row align-items-center '>
				<div className='col-6  '>
					<h1 className='cart-title'>Your Bag</h1>
					{cartItems.map((item) => {
						console.log(item);
						return (
							<div key={item.item.id} className='row'>
								<CartItem item={item.item} />
							</div>
						);
					})}
				</div>
				<div className='subtotal-content'>
					<h1 className='subtotal'>
						subtotal: ({cartItems.reduce((acc, item) => acc + item, 0)}) items
					</h1>
					<Button primary>Checkout</Button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
