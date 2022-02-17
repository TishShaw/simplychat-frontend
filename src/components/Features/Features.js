import React, { useState, useEffect } from 'react';
import { Button } from 'bootstrap-4-react';
import axios from 'axios';
import './Features.styles.css';

function Features(props) {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8000/shop/').then((res) =>{
            console.log(res.data)
            setProduct(res.data)
        } 
    )}, []);

	return (
		<div className='features'>
			<h1 className='features-title'>
				Best<span className='span'>Sellers</span>
			</h1>
			<div className='best'>
				<div className='best-item'>
					<img className='best-image' src={product[1].image} alt='' />
					<p className='best-name'>{product[1].item}</p>
					<p className='best-price'>{product[1].price}</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={product[3].image} alt='' />
					<p className='best-name'>{product[3].item}</p>
					<p className='best-price'>{product[3].price}</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={product[13].image} alt='' />
					<p className='best-name'>{product[13].item}</p>
					<p className='best-price'>{product[13].price}</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={product[8].image} alt='' />
					<p className='best-name'>{product[8].item}</p>
					<p className='best-price'>{product[8].price}</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={product[12].image} alt='' />
					<p className='best-name'>{product[12].item}</p>
					<p className='best-price'>{product[12].price}</p>
				</div>
			</div>
			<Button dark outline>
				Shop Best Sellers
			</Button>
		</div>
	);
}

export default Features;
