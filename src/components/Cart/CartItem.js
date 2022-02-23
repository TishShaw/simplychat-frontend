import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react/lib/components';
import { useDispatch, useSelector } from 'react-redux';

function CartItem({item}) {
    const dispatch = useDispatch();
    console.log(item);

    const removeFromCart = () => {
			console.log('removed');
			dispatch({ type: 'DELETE_ITEM', payload: item });
	};

    return (
			<div>
				<div className='row'>
					<div>
						<img src={item.image} alt='' className='small' />
					</div>
				</div>
				<div className='min-30'>
                    <Link to={`/${item.id}`} >{item.item}</Link></div>
				<div>
					<Button dark md outline onClick={removeFromCart}>
						Remove from cart
					</Button>
				</div>
			</div>
		);
}

export default CartItem;