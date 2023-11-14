import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction/productAction';
import './Features.styles.css';

function Features() {
	const productArr = useSelector((state) => state.product);
	const { products } = productArr;

	const dispatch = useDispatch();
	const amt = 5;
	const product = products?.slice(0, amt);
	console.log(product);

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	if (!product) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className='features'>
			<h1 className='features-title'>
				New<span className='span'>Arrivals</span>
			</h1>
			<div className='featuresContainer'>
				{product?.map((item) => (
					<div>
						<div className='features-item'>
							<img className='features-image' src={item.image} alt='' />
							<p className='features-name'>{item.item}</p>
							<p className='features-price'>{item.price}</p>
						</div>
						<button className=''>View</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Features;
