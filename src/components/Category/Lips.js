import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction/productAction';
import { Button } from 'bootstrap-4-react';
import Rating from '../Rating/Rating';
import './styles/Lips.styles.css';

function Lips() {
	const [lipProducts, setLipProducts] = useState([]);
	const product = useSelector((state) => state.product);
	const { products } = product;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(product));
	}, []);

	const filterLips = () => {
		const lipsFilter = products.filter((item) => {
			if (item.category_name === 'lips') {
				return item.item;
			}
		});
		setLipProducts(lipsFilter);
	}

	useEffect(() => {
		filterLips();
	});

	return (
		<div className='lips'>
			<div className='lips-headerImg'>
				<h1 className='lips-title'>Lips</h1>
			</div>
			<div className='lips-content'>
				{lipProducts.map((item) => {
					return (
						<div>
							<div key={item.id}>
								<img src={item.image} alt='ProductImage' className='lipsImg'/>
								<p>{item.item}</p>
								<Rating />
								<p>{item.price}</p>
								<Button className='face-cartBtn'>VIEW</Button>

								<Button className='face-cartBtn'>ADD TO CART</Button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Lips;
