import Button from 'bootstrap-4-react/lib/components/Button';
import './NewReview.styles.css';

function NewReview({newReview, handleChange, handleSubmit, editShowing, rating, setRating}) {
    return (
			<div className='review-container '>
				<form className='review-form' onSubmit={handleSubmit}>
					<div className='form-group'>
						<label>Rating</label>
						<select
							as='select'
							value={rating}
							onChange={(e) => setRating(e.target.value)}>
							<option value=''>Select...</option>
							<option value='1' id='rating'>
								1 - Poor
							</option>
							<option value='2' id='rating'>
								2 - Fair
							</option>
							<option value='3' id='rating'>
								3 - Good
							</option>
							<option value='4' id='rating'>
								4 - Very Good
							</option>
							<option value='5' id='rating'>
								5 - Excellent
							</option>
						</select>
						
				
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