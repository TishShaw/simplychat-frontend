import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction/productAction';
import './Features.styles.css';

function Features() {
	const product = useSelector((state) => state.product);
	const { products } = product;
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(getProducts());
	}, []);

	if (!product) {
		return null;
	}
	return (
		<div className='features'>
			<h1 className='features-title'>
				Best<span className='span'>Sellers</span>
			</h1>
			<div className='best'>
				<div className='best-item'>
					{/* <img className='best-image' src={products[0].image} alt='' /> */}
					<p className='best-name'>{products[0].item}</p>
					<p className='best-price'>{products[0].price}</p>
				</div>
				<div className='best-item'>
					{/* <img className='best-image' src={products[6].image} alt='' /> */}
					<p className='best-name'>{products[6].item}</p>
					<p className='best-price'>{products[6].price}</p>
				</div>
				<div className='best-item'>
					{/* <img className='best-image' src={products[9].image} alt='' /> */}
					<p className='best-name'>{products[9].item}</p>
					<p className='best-price'>{products[9].price}</p>
				</div>
				<div className='best-item'>
					{/* <img className='best-image' src={products[3].image} alt='' /> */}
					{/* <p className='best-name'>{products[3].item}</p> */}
					<p className='best-price'>{products[3].price}</p>
				</div>
				<div className='best-item'>
					{/* <img className='best-image' src={products[5].image} alt='' /> */}
					<p className='best-name'>{products[5].item}</p>
					<p className='best-price'>{products[5].price}</p>
				</div>
			</div>

			<Button dark outline className='bestBtn'>
				<Link to='/shop'>Shop Best Sellers</Link>
			</Button>
			{/* <div>
				<img src={Banner} alt='' className='bannerImg' />
			</div> */}
		</div>
	);
}

export default Features;
