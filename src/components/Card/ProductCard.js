import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';
import './ProductCard.styles.css';

function ProductCard({item}) {
    return (
			<div className='productCard'>
				<div key={item.id} className='productCard-item'>
					<div className='productCard-content'>
						<img className='best-image' src={item.image} alt='' />
						<p className='best-name'>{item.item}</p>
						<p className='best-price'>{item.price}</p>
						{/* <i className='fa-solid fa-heart'></i> */}
					</div>

					<div className='buttons'>
						<Button
							dark
							sm
							outline
							onClick={() => {
								console.log('view');
							}}>
							<Link to={`/${item.id}`} key={item.id}>
								View
							</Link>
						</Button>
						<Button dark sm outline>
							Add to Cart
						</Button>
					</div>
				</div>
			</div>
		);
}

export default ProductCard;