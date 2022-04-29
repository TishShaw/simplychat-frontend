import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productAction/productAction';
import Rating from '../Rating/Rating';
import ProductBox from '../ProductBox/ProductBox';
import './ProductList.styles.css';

function ProductDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { product } = productDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userData } = userLogin;

	const reducer = (acc, currentVal) => {
		return acc + currentVal;
	};

	let ratings = product?.reviews.map((item) => item.rating);
	const addRatings = ratings?.reduce(reducer, 0);
	const averageRatings = addRatings / ratings?.length;
	const [qty, setQty] = useState(1);

	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [dispatch, id]);

	const handleAddToCart = (product) => {
		navigate(`/cart/${id}?qty=${qty}`);
	};

	if (!product.reviews) {
		return null;
	}
	return (
		<div className='pd-wrapper'>
			<div className='mb-3'>
				<div className='row g-5 pro-card-container'>
					<div className='col-md-6 pro-card'>
						<img
							src={product.image ? product.image : ''}
							className='img-thumbnail'
							alt='...'
						/>
					</div>
					<div className='col-md-4'>
						<div className='card-body'>
							<p className='card-text-title'>{product.item}</p>
							<Rating
								value={averageRatings}
								text={`(${product.reviews.length}) reviews`}
								color={'#f8e825'}
							/>
							<p className='card-text-price'>$ {product.price}</p>
							<div className='product-status'>
								Status:
								{product.coutInStock > 0 ? 'In Stock' : 'Out of Stock'}
							</div>
							{product.countInStock > 0 && (
								<div>
									<div>Qty</div>
									<div xs='auto' className='my-1'>
										<select
											as='select'
											value={qty}
											onChange={(e) => setQty(e.target.value)}>
											{[...Array(product.countInStock).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</select>
									</div>
								</div>
							)}

							{userData ? (
								<div className='productBtn-container'>
									{product.countInStock > 0 && (
										<button className='productBtn' onClick={handleAddToCart}>
											Add to Cart
										</button>
									)}
								</div>
							) : (
								<Link to='/login'>
									<div className='productBtn-container'>
										{product.countInStock > 0 && (
											<button className='productBtn' onClick={handleAddToCart}>
												Add to Cart
											</button>
										)}
									</div>
								</Link>
							)}
						</div>
					</div>
				</div>
				<div className='product-box-section'>
					<ProductBox product={product} />
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
