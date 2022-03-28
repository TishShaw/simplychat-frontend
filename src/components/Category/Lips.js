import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction/productAction';
import { Button } from 'bootstrap-4-react';
import Rating from '../Rating/Rating';
import './styles/Lips.styles.css';
import Card from '../Card/Card';

function Lips() {
	const [lipProducts, setLipProducts] = useState([]);
	const product = useSelector((state) => state.product);
	const { products } = product;
	const dispatch = useDispatch();


	const filterLips = () => {
		const lipsFilter = products.filter((item) => {
			if (item.category_name === 'lips') {
				return item.item;
			}
		});
		setLipProducts(lipsFilter);
	}

	useEffect(() => {
		dispatch(getProducts(product));
		filterLips();
	},[product]);

	return (
		<div className='lips'>
			<div className='lips-headerImg'>
				<h1 className='lips-title'>Lips</h1>
			</div>
			<div className='lips-content'>
				{lipProducts.map((item) => {
					return (
							<div key={item.id} className='lip-card'>
								<Card item={item}/>
							</div>
					);
				})}
			</div>
		</div>
	);
}

export default Lips;
