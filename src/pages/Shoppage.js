import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/productAction/productAction';
import Card from '../components/Card/Card';
import ShopFilter from '../components/ShopFilter/ShopFilter';
import { useParams, useLocation } from 'react-router-dom';
import './styles/Shoppage.css';

function Shoppage() {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);
	const { products } = product;
	const [filteredArr, setFilteredArr] = useState([]);
	const [checked, setChecked] = useState(false);
	const location = useLocation();
	const searchQuery = new URLSearchParams(location.search).get('search');
	console.log(searchQuery);

	useEffect(() => {
		dispatch(getProducts(product));

		if (searchQuery) {
			const searchProduct = products.filter(
				(product) =>
					product.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
					product.category_name
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			);
			setFilteredArr(searchProduct);
		}
	}, []);

	const productsFilter = (event) => {
		event.preventDefault();

		const product = products.filter((item) => {
			if (item.category_name) return item.item;
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

	const handleFilterPrice = (e) => {
		const value = e;
		if (value === 'lowToHigh') {
			const asc = products.sort((a, b) => a.price - b.price);
			setFilteredArr(asc);
		}
		if (value === 'highToLow') {
			const desc = products.sort((a, b) => b.price - a.price);
			setFilteredArr(desc);
		}
		if (value === 'bestSellers') {
			const highlyRated = products.filter((item) => {
				if (item.reviews.rating >= 3) {
					return item;
				}
			});
			setFilteredArr(highlyRated);
		}
	};

	const handleChange = (e) => {
		const target = e.target.value;
		setChecked(!checked);

		const soldOut = products.filter((item) => {
			if (item.countInStock === 0) {
				return item;
			}
		});
		if (target === 'outOfStock') {
			setFilteredArr(soldOut);
		}

		const Available = products.filter((item) => {
			if (item.countInStock > 0) {
				return item;
			}
		});
		if (target === 'inStock') {
			setFilteredArr(Available);
		}
	};

	if (!products) {
		return <h3>Loading Products...</h3>;
	}
	return (
		<div className='shop'>
			<div className='shop-image'>
				<h1 className='sp-title'>Shop All</h1>
			</div>
			<div className='shop-content-wrapper'>
				<div className='shop-filter'>
					<ShopFilter
						faceFilter={faceFilter}
						eyeFilter={eyeFilter}
						lipFilter={lipFilter}
						productsFilter={productsFilter}
						handleFilterPrice={handleFilterPrice}
						handleChange={handleChange}
					/>
				</div>
				<div className='shop-select'>
					<label className='shop-select__label'>Sort By:</label>
					<select onChange={(e) => handleFilterPrice(e.target.value)}>
						<option value='bestSellers'>Best Sellers</option>
						<option value='lowToHigh'>Price: Low to High</option>
						<option value='highToLow'>Price: high to Low</option>
					</select>
				</div>
				<div className='shop-content'>
					{filteredArr.length > 0 ? (
						<div className='shop-results'>
							{filteredArr?.map((item) => (
								<Card key={item.id} item={item} />
							))}
						</div>
					) : (
						<div className='shop-results'>
							{products?.map((item) => (
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
