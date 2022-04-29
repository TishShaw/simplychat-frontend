import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../redux/actions/cartAction/cartAction';
import { CLEAR_SHOPPING_CART } from '../redux/constants/cartConstants';
import './styles/OrderConfrmation.css';
import { UserContext } from '../Context';

function OrderConfirmation() {
	const { userDetails } = useContext(UserContext);
	
	const [order, setOrder] = useState([]);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems, cartTotal } = cart;

	const sumOfProduct = (item) => (item.qty * item.price).toFixed(2);

	useEffect(() => {
		setOrder(cartItems);
		dispatch(getCartTotal());
		dispatch({type: CLEAR_SHOPPING_CART})
	}, []);

	if (!cartItems) {
		return <Navigate to='/' />;
	}
	return (
		<div className='confirmation'>
			<div className='confirmation__container'>
				<div className='confirmation__container-top'>
					<h1>Thank you for you purchase, {userDetails.name}!</h1>
					<p className='confirmation__container-topText'>
						{' '}
						You will recieve a confirmation email with your transaction number
						along with information on how to track your order once it has been
						shipped.
					</p>
					<p className='confirmation__ref'>Order ref:huhr92fw333</p>
				</div>

				<div className='confirmation__container-end'>
					<p>Order Details:</p>
					{order.map((item) => (
						<div key={item.name} className='confirmation__detail'>
							<img
								src={item.image}
								alt='orderImg'
								className='confirmation__image'
							/>
							<div className='confirmation__text'>
								<h6>{item.name}</h6>
								<p>Quantity: {item.qty}</p>
								<p>Price: {sumOfProduct(item)}</p>
							</div>
						</div>
					))}
					<div className='confirmation__container-total'>
						<h6>Subtotal: ${cartTotal}</h6>
						<p>Standard Shipping: Free</p>
						<p>Sales Tax: $0.00</p>

						<h5>Estimated Total ${cartTotal}</h5>
					</div>
				</div>
				<div className='confirmation__container-footer'>
					Got any questions? Contact us!
				</div>
			</div>
		</div>
	);
}

export default OrderConfirmation;
