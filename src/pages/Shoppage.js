import React, { useEffect } from 'react';
import './styles/Shoppage.css';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react/lib/components';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../redux/actions/Actions';

function Shoppage() {
	const dispatch = useDispatch();
	const productList = useSelector(
		(state) => state.productList.products['1']
	);
	console.log(productList);

	useEffect(() => {
		dispatch(allProducts());
	}, [dispatch]);

	if(!productList) {
		return <h5>Loading new products...</h5>
	}
	return (
		<div className='shop'>
			<h1 className='sp-title'>Shop All</h1>
			<div className='shop-content'>
				{productList.map((item) => (
					<div key={item.id}>
						<div className='productCard-content'>
							<img className='best-image' src={item.image} alt='' />
							<p className='best-name'>{item.item}</p>
							<p className='best-price'>{item.price}</p>
							<i className='fa-solid fa-heart'></i>
						</div>

						<div className='buttons'>
							<Button
								dark
								sm
								outline
								onClick={() => {
									console.log('view');
								}}>
								<Link to={`/${item.id}`} key={item.item_id}>
									View
								</Link>
							</Button>
							<Button dark sm outline>
								Add to Cart
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Shoppage;
