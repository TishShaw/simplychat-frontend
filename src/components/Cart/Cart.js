import React, { useEffect, useContext } from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	addToCart,
	removeFromCart,
} from '../../redux/actions/cartAction/cartAction';
import Paypal from '../Paypal/Paypal';
import './styles/Cart.style.css';
import { UserContext } from '../../Context';

function Cart() {
	const { currentUser, loggedIn } = useContext(UserContext);
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

	const cartTotal = cartItems
		.reduce((acc, item) => acc + item.qty * item.price, 0)
		.toFixed(2);

	const sumOfProduct = (item) => (item.qty * item.price).toFixed(2);

	if (!cartItems) {
		return null;
	}

	return (
		<div className='cart'>
			<h1 className='cart-title'>Your Bag</h1>
			<div>
				<ul className='row cartProductTitle'>
					<li className='col-md-8 bold'>Product</li>
					<li className='col bold'>Price</li>
					<li className='col bold'>Quantity</li>
					<li className='col bold'>Total</li>
				</ul>
			</div>

			<div>
				{cartItems.length === 0 ? (
					<div>
						Your cart is empty{' '}
						<Link to='/shop'>
							<span className='emptyCart'>Continue Shopping</span>
						</Link>
					</div>
				) : (
					<div>
						{cartItems.map((item) => (
							<div key={item.product} className='cart-products'>
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

									<div className='col col-item'>
										<p className='col'>${item.price}</p>
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
											<p className='col'>{sumOfProduct(item)}</p>
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
			{loggedIn === true ? (
				<div>
					<div className='total-card'>
						<div>
							<h5>Subtotal ${cartTotal}</h5>
							<p>Standard Shipping Free</p>
							<p>Sales Tax $0.00</p>
							<hr />
							<h5>Estimated Total ${cartTotal}</h5>
						</div>
						{cartItems.length > 0 && <Paypal cartTotal={cartTotal} />}
					</div>
				</div>
			) : (
				<div>
					<div className='total-card'>
						<div>
							<h5>Subtotal ${cartTotal}</h5>
							<p>Standard Shipping Free</p>
							<p>Sales Tax $0.00</p>
							<hr />
							<h5>Estimated Total ${cartTotal}</h5>
						</div>
						<div>
							Please{' '}
							<Link to='/login' style={{ color: 'red' }}>
								log in
							</Link>{' '}
							to continue
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Cart;
