import React, { useContext } from 'react';
import { ProductContext } from '../../Context';
import Foundation from '../../assets/images/toffeefoundation.jpg';
;

function ProductFeature() {
	const { product } = useContext(ProductContext);

	if (!product) {
		return 'loading products...';
	}
	return (
		<div className='features'>
			<h1 className='features-title'>
				New<span className='span'>Arrivals</span>
			</h1>
			<div className='best'>
				<div className='best-item pf-container'>
					<img className='best-image' src={Foundation} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
					<div className='overlay'>
						<button className='text'>view</button>
					</div>
				</div>
				<div className='best-item pf-container'>
					<img className='best-image' src={Foundation} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
					<div className='overlay'>
						<button className='text'>view</button>
					</div>
				</div>
				<div className='best-item pf-container'>
					<img className='best-image' src={Foundation} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
					<div className='overlay'>
						<button className='text'>view</button>
					</div>
				</div>
				<div className='best-item pf-container'>
					<img className='best-image' src={Foundation} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
					<div className='overlay'>
						<button className='text'>view</button>
					</div>
				</div>
				<div className='best-item pf-container'>
					<img
						className='best-image pf-container-image'
						src={Foundation}
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
