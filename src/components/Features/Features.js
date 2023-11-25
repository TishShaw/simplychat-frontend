import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction/productAction';
import ProductCard from '../Card/ProductCard';
import './Features.styles.css';

function Features() {
	const [featAmt, setFeatAmt] = useState(4);
	const productArr = useSelector((state) => state.product);
	const { products } = productArr;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 2000) {
				setFeatAmt(6);
			} else {
				setFeatAmt(3);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (!products) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className='features'>
			<h1 className='features-title'>
				New<span className='span'>Arrivals</span>
			</h1>
			<div className='featuresContainer'>
				{products?.slice(0, featAmt).map((item, idx) => (
					<>
						<ProductCard item={item} key={idx} />
					</>
				))}
			</div>
		</div>
	);
}

export default Features;
