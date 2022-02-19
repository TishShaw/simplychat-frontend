import React, { useEffect } from 'react';
import ProductCard from '../components/Card/ProductCard';
import './styles/Shoppage.css';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../redux/actions/Actions';

function Shoppage() {
	const dispatch = useDispatch();
	const productList = useSelector(
		(state) => {
			if (state.productList) {
				return state.productList
			} else {
				return state.productList
			}
		} 
	);
	console.log(productList);

	const {products} = productList;
	console.log(products[1])

	useEffect(() => {
		dispatch(allProducts());
	}, [dispatch]);

	if(!products) {
		return <h1>'Loading products...'</h1>
	}
	return (
		<div className='shop'>
			<h1 className='sp-title'>Shop All</h1>
				<div className='shop-content'>
					{products[1].map((item) => (
						<div key={item.id}>
							<ProductCard item={item} />
						</div>
					))}
				</div>
			
		</div>
	);
}

export default Shoppage;
