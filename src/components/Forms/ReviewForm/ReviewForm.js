import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap-4-react/lib/components';
import './ReviewForm.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { createProductReview } from '../../redux/actions/Actions';
import axios from 'axios';
import { PRODUCT_REVIEW_RESET } from '../../redux/constants/Constants';

function ReviewForm({ product }) {
	const initialFormData = {
		review_title: '',
		review_body: '',
	};
	const [comment, setComment] = useState('');

	const newProductReview = useSelector((state) => state.productReview);
	console.log(newProductReview);

	const {
		loading: loadingProductReview,
		error: errorProductReview,
		success: successProductReview,
	} = newProductReview;

	useEffect(() => {
		
	})



	const [newReview, setNewReview] = useState(initialFormData);

	const navigate = useNavigate();

	const handleChange = (event) => {
		setNewReview({ ...newReview, [event.target.id]: event.target.value });
	};
	const createReview = () => {
		fetch(`http://localhost:8000/shop/review`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify(newReview),
		})
			.then((res) => res.json())
			.then((res) => {
				setNewReview(res);
				navigate('/shop');
				console.log(res);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createReview();
	};

	// const createReview = async (event) => {
	// 	event.preventDefault();
	// 	const data = new initialFormData(event.target);
	// 	try {
	// 		const response = await fetch('http://localhost:8000/shop/review', {
	// 			method: 'POST',
	// 			body:  JSON.stringify(data),
	// 			headers: {
	// 				Authorization: `Token ${localStorage.getItem('token')}`,
	// 			},
	// 		});
	// 		if (response.status === 201) {
	// 			navigate('/shop');
	// 			setNewReview(data)
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
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
	);
}

export default ReviewForm;
