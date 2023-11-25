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
import pic from '../../assets/images/icons8-bag-64.png';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TbHeartShare } from 'react-icons/tb';

function Cart() {
	const { loggedIn, currentUser } = useContext(UserContext);
	console.log(currentUser);
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
		.reduce((acc, item) => acc + item?.qty * item.price, 0)
		.toFixed(2);

	if (!cartItems) {
		return null;
	}

	return (
		<div className='cart'>
			<h1 className='cart-title'>My Bag</h1>
			<div className='cart-card-container'>
				<div className='cart-card-map'>
					{cartItems.length > 0 ? (
						cartItems.map((item) => (
							<div className='cart-card-row' key={item.id}>
								<div>
									<Link to={`/${item.product}`}>
										<img
											src={item.image}
											className='cart-card-product-image'
											alt={item.name}
										/>
									</Link>
								</div>
								<div className='cart-card-product-context'>
									<div className='cart-card-product-title'>
										<Link to={`/${item.product}`}>{item.name}</Link>
									</div>
									<div className='cart-card-product-price-line'>
										<p>${item.price}</p>
									</div>
									<div className='cart-card-product-wishlist'>
										<p>
											<TbHeartShare />
											Move to wishlist
										</p>
									</div>
									<div className='cart-card-product-qty-line'>
										<div className='cart-card-product-qty-line-context'>
											<p onClick={() => handleRemoveFromCart(item.product)}>
												<FaRegTrashAlt />
											</p>
											<p>
												<select
													as='select'
													value={item.qty}
													onChange={(e) =>
														dispatch(
															addToCart(item.product, Number(e.target.value))
														)
													}
													style={{
														appearance: 'none',
														padding: '0.2px 5px',
														fontSize: '16px',
														border: '2px solid pink',
														borderRadius: '5px',
														backgroundColor: '#ecf0f1',
														color: 'pink',
														cursor: 'pointer',
														textAlign: 'center',
													}}
												>
													{[...Array(item.count_inStock).keys()].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</select>
											</p>
											<p>&#43;</p>
										</div>
									</div>
								</div>
							</div>
						))
					) : (
						<div className='cart-card-empty-bag'>
							<p>No items in shopping bag</p>
							<img src={pic} alt='' />
							<Link to='/shop'>
								<p>Continue Shopping</p>
							</Link>
						</div>
					)}
				</div>
				<div className='cart-card-checkout'>
					<div className='cart-card-checkout-bottom'>
						<form>
							<div className='cart-card-checkoutDiv'>
								<input
									type='text'
									placeholder='Apply a discount code'
									className='cart-card-checkout-input'
								/>
								<button className='cart-card-checkout-inputBtn'>Apply</button>
							</div>
						</form>
						<div className='cart-card-checkout-total-container'>
							<div className='cart-card-checkout-total'>
								<div className='cart-card-checkout-totalRow'>
									<p className='cart-card-checkout-totalRow-qty'>
										{cartItems?.length} items
									</p>
									<p className='cart-card-checkout-totalRow-qtyPrice'>
										${cartTotal}
									</p>
								</div>
								<div className='hr'> </div>
								<div className='cart-card-checkout-totalRow'>
									<p className='cart-card-checkout-totalRow-subtotal'>
										Subtotal
									</p>
									<p className='cart-card-checkout-totalRow-subPrice'>
										${cartTotal}
									</p>
								</div>
							</div>

							{currentUser?.userData ? (
								<div className='cart-card-checkoutBtn-container'>
									<div className=''>
										<Paypal cartTotal={cartTotal} />
									</div>
								</div>
							) : (
								<div className='cart-card-checkoutBtn'>
									<button>
										<Link to='/login'>Proceed to Login</Link>
									</button>
								</div>
							)}

							<div className='cart-card-checkout-payment'>
								<p>or 4 payments of $4.24 with ZIP or afterpay &#9432;</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
