import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Navigate } from 'react-router-dom';

function PaymentMethod(props) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart;
    const [payWPayPal, setPayWPayPal] = useState('PayPal')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch()

    }

    if(!shippingAddress.address) <Navigate to='/Checkout' />
    return (
        <div>
            
        </div>
    );
}

export default PaymentMethod;