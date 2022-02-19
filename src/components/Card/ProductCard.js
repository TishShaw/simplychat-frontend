import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react/lib/components';
import './ProductCard.styles.css';
import axios from 'axios';

function ProductCard({ item }) {
	const [favorite, setFavorite] = useState([]);
	const { id } = useParams();
	const [isFav, setiIsFav] = useState(false);

	const addFavorite = (event) => {
		axios
			.put('http://localhost:8000/shop/favorites/', favorite)
			.then((res) => console.log(res));
	};

	const handleClick = (event) => {
		setFavorite({ ...favorite, [event.target.id]: event.target.value });
		setiIsFav(!isFav);
	};

	useEffect(() => {
        axios.get(`http://localhost:8000/shop/${id}`)
        .then(res => console.log(res))
	},[])

	return (
		<div className='productCard'>
			<div className='productCard-content'>
				<img className='best-image' src={item.image} alt='' />
				<p className='best-name'>{item.item}</p>
				<p className='best-price'>{item.price}</p>
				<i className='fa-solid fa-heart'></i>
			</div>

			<div className='buttons'>
				<Button
					dark
					sm
					outline
					onClick={() => {
						console.log('view');
					}}>
					<Link to={`/${item.id}`} key={item.item_id}>
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

export default ProductCard;
