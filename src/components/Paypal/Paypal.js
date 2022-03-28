import React, { useEffect, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import OrderConfirmation from '../../pages/OrderConfirmation';

function Paypal({cartTotal}) {
	const navigate=useNavigate();
	const paypal = useRef();
	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions, err) => {
					return actions.order.create({
						intent: 'CAPTURE',
						purchase_units: [
							{
								description: ' Table',
								amount: {
									currency_code: 'USD',
									value: `${cartTotal}`,
								},
							},
						],
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					console.log(order);
					if (order.status === 'COMPLETED') {
						navigate('/orderConfirmation');
						
					}
				},
				onError: (err) => {
					console.log(err);
				},
			})
			.render(paypal.current);
	}, []);

	
		return (
			<div>
				<div ref={paypal}></div>
			</div>
		);
}

export default Paypal;
