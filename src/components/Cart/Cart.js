import React, { useEffect } from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { addToCart } from '../../redux/actions/cartAction/cartAction';
import './styles/Cart.style.css';

function Cart({match, history, location}) {
	const { id } = useParams()
	const [searchParms] = useSearchParams();
	const qty = Number(searchParms.get("qty"))
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart
	console.log(cartItems);
	
	useEffect(() => {
		if(id) {
			dispatch(addToCart(id, qty))
		}
	}, [dispatch, id, qty])
	

	if (!cartItems) {
		return <h1>Nothing in your cart</h1>
	}
	return (
		<div className='container'>
			<div className='row align-items-center '>
				<div className='col-6  '>
					<h1 className='cart-title'>Your Bag</h1>
					{cartItems.map((item) => {
						return (
							<div key={item.id} className='row'>
								<CartItem item={item} key={item.id} />
							</div>
						);
					})}
				</div>
				<div className='subtotal-content'>
					<h1 className='subtotal'>
						subtotal: $ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
							.toFixed(2)}
					</h1>
					{/* <Button primary>Checkout</Button> */}
				</div>
			</div>
		</div>
	);
}

export default Cart;
