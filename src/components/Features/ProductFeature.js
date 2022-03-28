import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction/productAction';
import './Features.styles.css';


function ProductFeature() {
	const product = useSelector((state) => state.product);
	const { products } = product;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	if (!product.image) {
		return null;
	}
	return (
		<div className='features'>
			<h1 className='features-title'>
				New <span className='span'>Arrivals</span>
			</h1>
			<div className='best'>
				<div className='best-item pf-container'>
					<img className='best-image' src={products[0].image} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
					<div className='overlay'>
						<button className='text'>view</button>
					</div>
				</div>
				<div className='best-item pf-container'>
					{/* <img className='best-image' src={products[0].image} alt='' /> */}
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
					<div className='overlay'>
						<button className='text'>view</button>
					</div>
				</div>
				<div className='best-item pf-container'>
					{/* <img className='best-image' src={products[0].image} alt='' /> */}
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
					<div className='overlay'>
						<button className='text'>view</button>
					</div>
				</div>
				<div className='best-item pf-container'>
					{/* <img className='best-image' src={products[0].image} alt='' /> */}
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
					<div className='overlay'>
						<button className='text'>view</button>
					</div>
				</div>
				<div className='best-item pf-container'>
					<img
						className='best-image pf-container-image'
						// src={products[0].image}
						alt=''
					/>
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
					<div className='overlay'>
						<button className='text'>view</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductFeature;
