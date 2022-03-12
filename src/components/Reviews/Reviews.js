import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context';
import { Button } from 'bootstrap-4-react/lib/components';
import Rating from '../Rating/Rating';
import NewReview from './NewReview/NewReview';
import UpdateReview from './UpdateReview/UpdateReview';
import './Reviews.styles.css';
import axios from 'axios';

function Reviews({ product }) {
	const { login, currentUser } = useContext(ProductContext);
	const { id } = useParams();

	const [showing, setShowing] = useState(false);
	const [editShowing, setEditShowing] = useState(false);
	const [reviewId, setReviewId] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [rating, setRating] = useState(0);

	const handleShowing = (event) => {
		event.preventDefault();
		setShowing(!showing);
	};

	const handleEditShowing = (event) => {
		event.preventDefault();
		getReview(id);
		setEditShowing(!editShowing);
	};

	const initialReviewData = {
		rating: null,
		product_id: id,
		review_title: '',
		review_body: '',
	};

	const navigate = useNavigate();
	const [newReview, setNewReview] = useState(initialReviewData);
	
	const handleChange = (event) => {
		setNewReview((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};

	const createNewReview = async () => {
		try {
			const response = await fetch(
				'https://desolate-brushlands-04983.herokuapp.com/shop/review/',
				{
					method: 'POST',
					body: JSON.stringify(newReview),
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			);
			if (response.status === 201) {
				
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createNewReview();
	};

	const getReview = async () => {
		try {
			const data = await axios
				.get(`https://desolate-brushlands-04983.herokuapp.com/shop/review/`)
				.then((data) => setReviews(data.data));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getReview();
	}, []);

	const newid = reviewId.filter((item) => {
		if (item.product_id === product.id) {
			return product.reviews[0].id;
		} else {
			return '';
		}
	});

	const editReview = async () => {
		try {
			const response = await fetch(
				`https://desolate-brushlands-04983.herokuapp.com/shop/review/${newid[0].id}`,
				{
					method: 'PUT',
					body: JSON.stringify(newReview),
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			);
			if (response.status === 200) {
				navigate('/shop');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const removeReview = async () => {
		try {
			const response = await fetch(
				`https://desolate-brushlands-04983.herokuapp.com/shop/review/${newid[0].id}`,
				{
					method: 'DELETE',
					body: JSON.stringify(newReview),
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			);
			if (response.status === 204) {
				navigate('/shop');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = (event) => {
		event.preventDefault();
		getReview(id);
		removeReview();
	};

	const handleUpdate = (event) => {
		event.preventDefault();
		editReview();
	};
	if (!product.reviews) {
		return <p>Loading Reviews...</p>;
	}
	return (
		<div>
			<div className='row'>
				<div className='reviews'>
					{!product.reviews.length && (
						<p className='noReview'>No reviews yet!</p>
					)}
					<Button
						md
						outline
						style={{ backgroundColor: 'pink', color: 'white', display: 'flex' }}
						onClick={handleShowing}
						className='reviewsBtn'>
						{' '}
						Add a review
					</Button>
				</div>

				<div className='review-results'>
					{product.reviews.map((item) => {
						return ((
							<div key={item.id}>
								<div className='' style={{ width: '18rem', marginTop: '30px' }}>
									<div className='' key={item.id}>
										<Rating
											item={item}
											key={item.id}
											value={item.rating}
											color='#f8e825'
										/>
										<h5 className='card-title'>{item.review_title}</h5>
										<h6 className='card-subtitle mb-2 text-muted'>
											{item.owner}
										</h6>
										<p className='card-text'>{item.review_body}</p>
										{currentUser && currentUser.username === item.owner && (
											<div>
												<Button dark outline onClick={handleEditShowing}>
													Edit
												</Button>
												<Button dark outline onClick={handleDelete}>
													Delete
												</Button>
											</div>
										)}
									</div>
								</div>
							</div>
						): null);
					})}
				</div>
				{login && editShowing ? (
					<UpdateReview
						handleChange={handleChange}
						handleUpdate={handleUpdate}
						newReview={newReview}
					/>
				) : null}
				{login && showing ? (
					<NewReview
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						newReview={newReview}
						editShowing={editShowing}
						rating={rating}
						setRating={setRating}						
					/>
				) : null}
				{login ? (
					''
				) : (
					<div className='alert alert-primary alert-message' role='alert'>
						please login to add a review!
					</div>
				)}
			</div>
		</div>
	);
}

export default Reviews;
