import { Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';
import CartBtn from '../Cart/CartBtn';
import Rating from '../Rating/Rating';
import './Card.styles.css';

function Card({ item }) {
	const reducer = (acc, currentVal) => {
		return acc + currentVal;
	};

	const ratings = item.reviews.map((item) => item.rating);
	const addRatings = ratings.reduce(reducer, 0);
	const averageRatings = addRatings / ratings.length;

	return (
		<div className='Card'>
			<div className='Card-content'>
				<img className='card-image' src={item.image} alt='card' />
				<p className='card-name'>{item.item}</p>
				<div className='ratingRow'>
					<Rating value={averageRatings} color='#f8e825' className='ratings' />(
					{item.reviews.length})
				</div>
				<p className='card-price'>${item.price}</p>
				<div className='buttons'>
					<Link to={`/${item.id}`}>
						<Button className='cardButton'>Add to cart</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Card;
