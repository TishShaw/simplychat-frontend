import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction/productAction';
import Card from '../Card/Card';
import './styles/Face.css';

function Face() {
	const [faceProduct, setFaceProduct] = useState([]);
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);
	const { products } = product;
	console.log(products);

	useEffect(() => {
		dispatch(getProducts());
	}, []);
	const filterProducts = () => {
		const face = products.filter((item) => {
			if (item.category_name === 'face') {
				return item;
			}
		});
		setFaceProduct(face);
	};
	useEffect(() => {
		filterProducts();
	});

	if (!filterProducts) {
		return <h3>Loading...</h3>;
	}
	return (
		<div className='face'>
			<div className='face-headerImg'>
				<h1 className='face-title'>Face</h1>
			</div>
			<div className='face-resultsList'>
				{faceProduct.map((item) => {
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

export default Face;
