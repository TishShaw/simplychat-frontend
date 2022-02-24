import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';
import CartBtn from '../Cart/CartBtn';
import './ProductCard.styles.css';

function ProductCard({item}) {
    return (
			<div className='productCard'>
				<div key={item.id} className='productCard-item'>
					<div className='productCard-content'>
						<img className='best-image' src={item.image} alt='' />
						<p className='best-name'>{item.item}</p>
						<p className='best-price'>{item.price}</p>
						<i className='fa-solid fa-heart heart'></i>
					</div>

					<div className='buttons'>
						<Button
							dark
							sm
							outline
							className='pc-btn'
							onClick={() => {
								
							}}>
							<Link to={`/${item.id}`} key={item.id}>
								View
							</Link>
						</Button>
						<div key={item.id}>
							<CartBtn item={item} />
						</div>
					</div>
				</div>
			</div>
		);
}

export default ProductCard;