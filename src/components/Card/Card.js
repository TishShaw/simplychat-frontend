import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';
import CartBtn from '../Cart/CartBtn';
import './Card.styles.css';
import Rating from '../Rating/Rating';

function Card({ item }) {
	console.log(item);

	return (
		<div className='Card'>
			<div className='Card-item'>
				<div className='Card-content'>
					<img className='card-image' src={item.image} alt='' />
					<p className='card-name'>{item.item}</p>
					<Rating value={item.rating} />
					<p className='card-price'>{item.price}</p>

					<div className='buttons'>
						<Button dark sm outline className='pc-btn' onClick={() => {}}>
							<Link to={`/${item.id}`} className='cardBtn'>
								View
							</Link>
						</Button>
						<div>
							<CartBtn item={item} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
