import React, { useContext } from 'react';
import { ProductContext } from '../Context';
import Card from '../components/Card/Card';
import ShopFilter from '../components/ShopFilter/ShopFilter';

import './styles/Shoppage.css';

function Shoppage() {
	const { product } = useContext(ProductContext);

	return (
		<div className='shop'>
			<div className='shop-image'>
				<h1 className='sp-title'>Shop All</h1>
			</div>
			<div className='shop-content-wrapper'>
				<div className='shop-content'>
					<div className='shop-filter'>
						<ShopFilter />
					</div>
					<div className='shop-results'>
						{product.map((item) => (
							<Card key={item.id} item={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Shoppage;
