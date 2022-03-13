import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context';
import { useDispatch } from 'react-redux';
import { editProductReview } from '../../redux/actions/productAction/productAction';
import { Button } from 'bootstrap-4-react/lib/components';
import Rating from '../Rating/Rating';
import NewReview from './NewReview/NewReview';
import UpdateReview from './UpdateReview/UpdateReview';
import EditBtn from '../EditBtn';
import DeleteBtn from '../DeleteBtn';
import './Reviews.styles.css';


function Reviews({ product }) {
	const { login, currentUser } = useContext(ProductContext);
	const { id } = useParams();
	const dispatch = useDispatch();
	const [showing, setShowing] = useState(false);
	const [editShowing, setEditShowing] = useState(false);
	const [reviewId, setReviewId] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [rating, setRating] = useState('');

	const navigate = useNavigate();

	console.log(product.reviews);
	console.log(product);

	const handleShowing = (event) => {
		event.preventDefault();
		setShowing(!showing);
	};

	const handleEditShowing = (event) => {
		event.preventDefault();
		setEditShowing(!editShowing);
	};

	const initialReviewData = {
		rating: null,
		product_id: id,
		review_title: '',
		review_body: '',
	};

	const [newReview, setNewReview] = useState(initialReviewData);

	const handleChange = (event) => {
		setNewReview((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};

	// const getReview = async () => {
	// 	try {
	// 		const data = await axios
	// 			.get(`https://desolate-brushlands-04983.herokuapp.com/shop/review/`)
	// 			.then((data) => setReviews(data.data));
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// useEffect(() => {
	// 	getReview();
	// }, []);

	const newid = reviewId.filter((item) => {
		if (item.product_id === product.id) {
			return product.reviews[0].id;
		} else {
			return '';
		}
	});

console.log(id);

	const handleUpdate = (event, id) => {
		event.preventDefault();
		
		dispatch(editProductReview(id));
		console.log(id); 
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
						return (
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
										{currentUser.name === item.owner && (
											<div>
												<EditBtn
													item={item}
													handleEditShowing={handleEditShowing}
												/>
												<DeleteBtn item={item} />
											</div>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
				{login && editShowing ? (
					<UpdateReview
						handleChange={handleChange}
						handleUpdate={handleUpdate}
						newReview={newReview}
						setRating={setRating}
					/>
				) : null}
				{login && showing ? (
					<NewReview
						handleChange={handleChange}
						newReview={newReview}
						setNewReview={setNewReview}
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
