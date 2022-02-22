import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context';
import { Button } from 'bootstrap-4-react/lib/components';
import './ProductList.styles.css';

function ProductDetail() {
	const { login } = useContext(ProductContext);
	const { id } = useParams();
	const [showing, setShowing] = useState(false);
	const [product, setProduct] = useState(null);
	const handleShowing = (event) => {
		event.preventDefault();
		setShowing(!showing);
	};

	const initialReviewData = {
		product_id: '',
		review_title: '',
		review_body: '',
	};
	// console.log(product.id)

	const navigate = useNavigate();
	const [newReview, setNewReview] = useState(initialReviewData);

	const handleChange = (event) => {
		setNewReview((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};

	const createNewReview = async (event) => {
		fetch(`http://localhost:8000/shop/review/`, {
			method: 'POST',
			body: JSON.stringify(newReview),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
		}).then((response) => console.log(newReview));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		createNewReview();
		console.log('submit');
	};

	const addToCart = () => {};

	const getProductDetail = async () => {
		try {
			const response = await fetch(`http://localhost:8000/shop/${id}`);
			const data = await response.json();
			console.log(data);
			if (response.status === 200) {
				setProduct(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getProductDetail();
	}, []);

	if (!product) {
		return null;
	}

	return (
		<div className='card mb-3 pd-wrapper'>
			<div className='row g-5'>
				<div className='col-md-4'>
					<img
						src={product.image}
						className='img-fluid rounded-start'
						alt='...'
					/>
				</div>
				<div className='col-md-8'>
					<div className='card-body'>
						<p className='card-text'>{product.item}</p>
						<p className='card-text'>{product.price}</p>
						<div className='dropdown'>
							<button
								className='btn dropdown-toggle'
								type='button'
								id='dropdownMenuButton1'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								QTY:
							</button>
						</div>
						<p className='card-text'>{product.description}</p>
						<Button dark md outline onClick={addToCart}>
							{' '}
							Add to Cart
						</Button>
						<Button dark md outline>
							{' '}
							Save for Later
						</Button>
						{/* <i className='fa-solid fa-heart'></i> */}
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='reviews'>
					<h6 className='card-title review-title'>Customer Reviews</h6>
					<Button
						dark
						sm
						outline
						onClick={handleShowing}
						className='reviewsBtn'>
						{' '}
						Add a review
					</Button>
				</div>
				<div>
					{product.reviews.map((item) => (
						<div className='card' style={{ width: '18rem', marginTop: '30px' }}>
							<div className='card-body' key={item.id}>
								<h5 className='card-title'>{item.review_title}</h5>
								<h6 className='card-subtitle mb-2 text-muted'>{item.owner}</h6>
								<p className='card-text'>{item.review_body}</p>
							</div>
						</div>
					))}
				</div>
				{showing ? (
					<div className='review-container'>
						<form className='review-form' onSubmit={handleSubmit}>
							<div className='form-group'>
								<label htmlFor='product_id'>Product:</label>
								<input
									type='checkbox'
									value={newReview.product_id}
									onChange={handleChange}
									className='form-control'
									id='product_id'
									placeholder={product.item}
									
								/>
								<label htmlFor='review_title'>Title:</label>
								<input
									type='text'
									value={newReview.review_title}
									onChange={handleChange}
									className='form-control'
									id='review_title'
									placeholder='Enter Title'
								/>
								<label htmlFor='review_body'>Review Body:</label>
								<input
									type='text'
									value={newReview.review_body}
									onChange={handleChange}
									className='form-control'
									id='review_body'
									placeholder='Enter Body of Review'
								/>
							</div>
							<Button dark sm outline type='submit'>
								Submit Review
							</Button>
						</form>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default ProductDetail;
