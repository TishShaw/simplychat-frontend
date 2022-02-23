import Button from 'bootstrap-4-react/lib/components/Button';
import React from 'react';

function NewReview({newReview, handleChange, handleSubmit}) {
    return (
			<div className='review-container '>
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

export default NewReview;