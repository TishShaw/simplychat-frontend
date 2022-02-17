import React, { useContext } from 'react';
import { ProductContext } from '../Context';
import './styles/Shoppage.css';
import ProductCard from '../components/Card/ProductCard';

function Shoppage(props) {
	const { product } = useContext(ProductContext);
	
    return (
			<div className='shop'>
				<h1 className='sp-title'>Shop All</h1>
				<div className='shop-content'>
					{product.map((item) => (
						
						<ProductCard key={item.id} item={item} />
					))}
				</div>
			</div>
		);
}

export default Shoppage;