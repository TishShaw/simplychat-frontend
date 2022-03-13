import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/productAction/productAction';
import Card from '../components/Card/Card';
import ShopFilter from '../components/ShopFilter/ShopFilter';
import './styles/Shoppage.css';

function Shoppage() {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);
	const { products } = product;

	const [filteredArr, setFilteredArr] = useState([]);

	useEffect(() => {
		dispatch(getProducts(product));
	}, []);

	const productsFilter = (event) => {
		event.preventDefault();

		const product = products.filter((item) => {
			if (item.category_name) return item.item;
			console.log('allproducts');
		});
		setFilteredArr(product);
	};

	const faceFilter = (event) => {
		event.preventDefault();

		const face = products.filter((item) => {
			if (item.category_name === 'face') return item.item;
		});
		setFilteredArr(face);
	};

	const eyeFilter = (event) => {
		event.preventDefault();

		const eye = products.filter((item) => {
			if (item.category_name === 'eyes') return item.item;
		});
		setFilteredArr(eye);
	};

	const lipFilter = (event) => {
		event.preventDefault();

		const lip = products.filter((item) => {
			if (item.category_name === 'lips') return item.item;
		});
		setFilteredArr(lip);
	};

	return (
		<div className='shop'>
			<div className='shop-image'>
				<h1 className='sp-title'>Shop All</h1>
			</div>
			<div className='shop-content-wrapper'>
				<div className='shop-content'>
					<div className='shop-filter'>
						<ShopFilter
							faceFilter={faceFilter}
							eyeFilter={eyeFilter}
							lipFilter={lipFilter}
							productsFilter={productsFilter}
						/>
					</div>
					{filteredArr.length > 0 ? (
						<div className='shop-results'>
							{filteredArr.map((item) => (
								<Card key={item.id} item={item} />
							))}
						</div>
					) : (
						<div className='shop-results'>
							{products.map((item) => (
								<Card key={item.id} item={item} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Shoppage;
