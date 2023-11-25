import React from 'react';
import { Link } from 'react-router-dom';
import CartBtn from '../Cart/CartBtn';
import Rating from '../Rating/Rating';
import './ProductCard.styles.css';

function ProductCard({ item }) {
	const reducer = (acc, currentVal) => {
		return acc + currentVal;
	};

	const ratings = item.reviews.map((item) => item.rating);
	const addRatings = ratings.reduce(reducer, 0);
	const averageRatings = addRatings / ratings.length;

	return (
		<div className='features-item'>
			<Link to={`/${item.id}`}>
				<div className='features-item-top'>
					<img className='features-image' src={item.image} alt='' />
					<p className='features-name'>{item.item}</p>
					<p className='features-price'>${item.price}</p>
					<div className='features-ratingRow'>
						<Rating
							value={averageRatings}
							color='#f8e825'
							className='ratings'
						/>
						({item.reviews.length})
					</div>
				</div>
			</Link>
			<CartBtn id={item.id} />
			<div className='features-item-span'>
				<i class='fa-regular fa-heart'></i>
				<span className='features-span'>Add to wishlist</span>
			</div>
		</div>
	);
}

export default ProductCard;
