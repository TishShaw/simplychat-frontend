import React, { useEffect } from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	addToCart,
	removeFromCart,
} from '../../redux/actions/cartAction/cartAction';
import './styles/Cart.style.css';

function Cart({ match, history, location }) {
	const { id } = useParams();
	const [searchParms] = useSearchParams();
	const qty = Number(searchParms.get('qty'));
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (id) {
			dispatch(addToCart(id, qty));
		}
	}, [dispatch, id, qty]);

	const handleRemoveFromCart = (id) => {
		dispatch(removeFromCart(id));
	};


	if (!cartItems) {
		return null;
	}

	return (
		<div>
			<h1 className='cart-title'>Your Bag</h1>
			<div>
				<ul className='row'>
					<li className='col-md-8 bold'>Product</li>
					<li className='col bold'>Price</li>
					<li className='col bold'>Quantity</li>
					<li className='col bold'>Total</li>
				</ul>
			</div>
			<hr />
			<div>
				{cartItems.length === 0 ? (
					<div>
						Your cart is empty <Link to='/'>Continue Shopping</Link>
					</div>
				) : (
					<div>
						{cartItems.map((item) => (
							<div key={item.product}>
								<div className='row'>
									<div className='col'>
										<img
											src={item.image}
											alt={item.name}
											className='cart-img'
											fluid
											rounded
										/>
									</div>
									<div className='col'>
										<Link to={`/product/${item.product}`}>{item.name}</Link>
									</div>

									<div className='col'>
										<p>${item.price}</p>

										<div className='col'>
											<select
												as='select'
												value={item.qty}
												onChange={(e) =>
													dispatch(
														addToCart(item.product, Number(e.target.value))
													)
												}>
												{[...Array(item.countInStock).keys()].map((x) => (
													<option key={x + 1} value={x + 1}>
														{x + 1}
													</option>
												))}
											</select>

											<button
												onClick={() => handleRemoveFromCart(item.product)}>
												<i className='fas fa-trash col'></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
			<div>
				<div className='total-card'>
					<div>
						<h5>
							Subtotal $
							{cartItems
								.reduce((acc, item) => acc + item.qty * item.price, 0)
								.toFixed(2)}
						</h5>
						<p>Standard Shipping Free</p>
						<p>Sales Tax $0.00</p>
						<hr />
						<h5>
							Estimated Total $
							{cartItems
								.reduce((acc, item) => acc + item.qty * item.price, 0)
								.toFixed(2)}
						</h5>
					</div>

					<div>
						<button
							className='btn-block checkout-btn'
							disabled={cartItems.length === 0}>
							<Link to='/Checkout'>Secure Checkout</Link>
						</button>
						<button
							className='btn-block checkout-btn'
							disabled={cartItems.length === 0}>
							Check Out With PayPal
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
