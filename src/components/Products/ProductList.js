import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'bootstrap-4-react/lib/components';
import './ProductList.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { allProductDetails } from '../../redux/actions/Actions';

function ProductDetail(props) {
	const { id } = useParams();
	const dispatch = useDispatch();
	let product = useSelector((state) => state.productDetails.product);
	console.log(product)
	useEffect(() => {
		dispatch(allProductDetails(id));
	}, [dispatch]);

	return (
		<div className='card mb-3 pd-wrapper'>
			<div className='row g-0'>
				<div className='col-md-4'>
					<img
						src={product.image}
						className='img-fluid rounded-start'
						alt='...'
					/>
				</div>
				<div className='col-md-8'>
					<div className='card-body'>
						<h5 className='card-title'>{product.item}</h5>
						<p className='card-text'>{product.price}</p>

						<p className='card-text'>{product.description}</p>
						<Button dark md outline>
							{' '}
							Add to Cart
						</Button>
						<Button dark md outline>
							{' '}
							Save for Later
						</Button>
						<i class='fa-solid fa-heart'></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
