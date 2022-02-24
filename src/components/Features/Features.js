import React, { useContext } from 'react';
import { ProductContext } from '../../Context';
import { Button } from 'bootstrap-4-react';
import './Features.styles.css';
import { Link } from 'react-router-dom';


function Features() {
	const { product } = useContext(ProductContext);
	
	
	if (!product.item) {
		return 'loading products...';
	}
	return (
		<div className='features'>
			<h1 className='features-title'>
				Best<span className='span'>Sellers</span>
			</h1>
			<div className='best'>
				<div className='best-item'>
					{/* <img className='best-image' src={product[1].image} alt='' /> */}
					<p className='best-name'>{product[1].item}</p>
					<p className='best-price'>{product[1].price}</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={product[3].image} alt='' />
					<p className='best-name'>{product[3].item}</p>
					<p className='best-price'>{product[3].price}</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={product[9].image} alt='' />
					<p className='best-name'>{product[9].item}</p>
					<p className='best-price'>{product[9].price}</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={product[8].image} alt='' />
					<p className='best-name'>{product[8].item}</p>
					<p className='best-price'>{product[8].price}</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={product[5].image} alt='' />
					<p className='best-name'>{product[5].item}</p>
					<p className='best-price'>{product[5].price}</p>
				</div>
			</div>

			<Button dark outline>
				<Link to='/shop'>Shop Best Sellers</Link>
			</Button>
		</div>
	);
}

export default Features;
