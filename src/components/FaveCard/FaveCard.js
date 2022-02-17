import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react/lib/components';

function FavCard({fav, image, price, name}) {
    return (
			<div className='favcard'>
				<div className='favCard-content'>
					<img className='best-image' src={fav.image} alt='' />
					<p className='best-name'>{fav.name}</p>
					<p className='best-price'>{fav.price}</p>
					
				</div>

				<div className='buttons'>
					<Button
						dark
						sm
						outline
						onClick={() => {
							console.log('view');
						}}>
						<Link to={`/fav.id`}>
							View
						</Link>
					</Button>
					<Button dark sm outline>
						Add to Cart
					</Button>
				</div>
			</div>
		);
}

export default FavCard;