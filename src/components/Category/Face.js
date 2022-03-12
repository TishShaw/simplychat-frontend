import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'bootstrap-4-react';
import { getProducts } from '../../redux/actions/productAction/productAction';
import Rating from '../Rating/Rating';
import './styles/Face.css';

function Face() {
	const [faceProduct, setFaceProduct] = useState([]);
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);
	const { products } = product;
	console.log(products);

	useEffect(() => {
		dispatch(getProducts(product));
	}, []);

	const filterProducts = () => {
		const face = products.filter((item) => {
			if (item.category_name === 'face') {
				return item.item;
			}
		});
		setFaceProduct(face);
	};

	useEffect(() => {
		filterProducts();
	});

	return (
		<div className='face'>
			<div className='face-headerImg'>
				<h1 className='face-title'>Face</h1>
			</div>
			<div className='face-resultsList'>
				{faceProduct.map((item) => {
					return (
						<div key={item.id}>
							<img
								src={item.image}
								alt='ProductPicture'
								className='faceResultsImg'
							/>
							<p>{item.item}</p>
							<Rating />
							<p>{item.price}</p>
							<Button className='face-cartBtn'>VIEW</Button>

							<Button className='face-cartBtn'>ADD TO CART</Button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Face;
