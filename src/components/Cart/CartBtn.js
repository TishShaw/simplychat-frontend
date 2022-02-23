import React from 'react';
import { Button } from 'bootstrap-4-react/lib/components';
import { useNavigate } from 'react-router-dom';

function CartBtn(props) {
    const navigate = useNavigate()

    const addToCart = () => {
        console.log('cart')
    }

    

    return (
			
				<Button dark md outline onClick={addToCart}>
					{' '}
					Add to Cart
				</Button>
			
		);
}

export default CartBtn;