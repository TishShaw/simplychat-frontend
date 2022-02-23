import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { ProductContext } from '../../Context';
import { Button } from 'bootstrap-4-react/lib/components';
import './ProductList.styles.css';
import Review from '../../Review/Review';
import CartBtn  from '../Cart/CartBtn';

function ProductDetail({match}) {
	const { login } = useContext(ProductContext);

	const {id}  = useParams();
	const [showing, setShowing] = useState(false);
	const [product, setProduct] = useState(null);
	const handleShowing = (event) => {
		event.preventDefault();
		setShowing(!showing);
	};


	const initialReviewData = {
		product_id: id,
		review_title: '',
		review_body: '',
	};

	console.log(initialReviewData)

	

	const navigate = useNavigate();
	const [newReview, setNewReview] = useState(initialReviewData);

	const handleChange = (event) => {
		setNewReview((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};

	console.log(newReview);
		const createNewReview = async (event) => {
			// event.preventDefault();

			try {
				const response = await fetch('http://localhost:8000/shop/review/', {
					method: 'POST',
					body: JSON.stringify(newReview),
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				});
				if (response.status === 201) {
					navigate('/shop');
				}
			} catch (error) {
				console.log(error);
			}
		};

	const handleSubmit = (e) => {
		e.preventDefault();

		createNewReview();
		console.log('submit');
	};

	const getProductDetail = async() => {
		try {
			const response = await fetch(`http://localhost:8000/shop/${id}`).then(
				(response) => response.json()
			);
			
			
			console.log(response);
			setProduct(response);
			console.log(product);
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
						src={product.image ? product.image : ''}
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
						<CartBtn />
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
						className='reviewsBtn'
						>
						{' '}
						Add a review
					</Button>
				</div>
				{!product.reviews.length && <p className='noReview'>No reviews yet!</p>}
				<div>
					{product.reviews.map((item) => (
						<Review newReview={newReview} handleShowing={handleShowing} handleChange={handleChange} item={item} owner={item.owner} key={item.id} />
					))}
				</div>
				{showing ? (
					<div className='review-container'>
						<form className='review-form' onSubmit={handleSubmit}>
							<div className='form-group'>
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
