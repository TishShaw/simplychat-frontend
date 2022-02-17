import React, { useState, useEffect } from 'react';
import { Button } from 'bootstrap-4-react';
import axios from 'axios';
import './Features.styles.css';

function Features(props) {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8000/shop/').then((res) => console.log(res.data));
	}, []);

	return (
		<div className='features'>
			<h1 className='features-title'>Best Sellers</h1>
			<div></div>
			<Button dark outline>
				Shop Best Sellers
			</Button>
		</div>
	);
}

export default Features;
