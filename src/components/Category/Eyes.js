import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction/productAction';
import Card from '../Card/Card';
import './styles/Eyes.css';

function Eyes() {
	const [eyes, setEyes] = useState([]);

	const product = useSelector((state) => state.product);
	const { products } = product;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(product));
	}, []);

	const filterEyes = () => {
		const eyesFilter = products.filter((item) => {
			if (item.category_name === 'eyes') {
				return item;
			}
		});
		setEyes(eyesFilter);
	};

	useEffect(() => {
		filterEyes();
	});

	return (
		<div className='eyes'>
			<div className='eyes-headerImg'>
				<h1 className='eyes-title'>Eyes</h1>
			</div>
			<div className='eyes-content'>
				{eyes.map((item) => {
					return (
						<div key={item.id}>
							<Card item={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Eyes;
