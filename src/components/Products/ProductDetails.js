import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { ProductContext } from '../../Context';
import { Button } from 'bootstrap-4-react/lib/components';
import './ProductList.styles.css';
import CartBtn from '../Cart/CartBtn';
import NewReview from '../NewReview/NewReview';
import UpdateReview from '../UpdateReview/UpdateReview';

function ProductDetail() {
	const { login, currentUser} = useContext(ProductContext);

	const { id } = useParams();
	const [showing, setShowing] = useState(false);
	const [editShowing, setEditShowing] = useState(false);
	const [product, setProduct] = useState('');
	const [reviewId, setReviewId] = useState([]);
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
				'https://secret-beyond-07972.herokuapp.com/shop/review/',
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
				navigate('/shop');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		createNewReview();
		
	};


	const getProductDetail = async () => {
		try {
			const response = await fetch(
				`https://secret-beyond-07972.herokuapp.com/shop/${id}`
			).then((response) => response.json());

			
			setProduct(response);
			
		} catch (error) {
			console.log(error);
		}
	};

	


	useEffect(() => {
		getProductDetail()
	},[])

	const getReview = async () => {
		try {
			let data = await fetch(
				`https://secret-beyond-07972.herokuapp.com/shop/review/`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			)
				.then((response) => response.json())
				.then((data) => setReviewId(data));
			
			
			
		} catch (error) {
			console.log(error);
		}
	}

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
				`https://secret-beyond-07972.herokuapp.com/shop/review/${newid[0].id}`,
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
					`https://secret-beyond-07972.herokuapp.com/shop/review/${newid[0].id}`,
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

	useEffect(() => {
		getProductDetail();
	}, []);

	if (!product.reviews) {
		return null;
	}

	return (
		<div className='card mb-3 pd-wrapper '>
			<div className='row g-5'>
				<div className='col-md-4 pro-card'>
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

						<p className='card-text'>{product.description}</p>

						<CartBtn />
						{/* <Button dark md outline>
							{' '}
							Save for Later
						</Button> */}
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
				{/* {!product.reviews.length && <p className='noReview'>No reviews yet!</p>} */}
				<div>
					{product.reviews.map((item) => (
						<div>
							<div
								className='card'
								style={{ width: '18rem', marginTop: '30px' }}>
								<div className='card-body' key={item.id}>
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
					))}
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

export default ProductDetail;
