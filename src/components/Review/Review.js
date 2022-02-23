import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap-4-react/lib/components';
import { ProductContext } from '../../Context';

function Review({ item, owner, newReview, handleChange}) {
	console.log(item);
    const [showing, setShowing] = useState(false)
	const { currentUser } = useContext(ProductContext);
	const { id } = useParams();
	const navigate = useNavigate();

    const handleShowReview = (event) => {
        event.preventDefault();

        setShowing(true)
    }
	console.log(id);
	const removeReview = async () => {
		try {
			const response = await fetch(
				`http://secret-beyond-07972.herokuapp.com/shop/review/${item.id}`,
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

		removeReview();
		console.log('submit');
	};

	const editReview = async () => {
		try {
			const response = await fetch(
				`http://localhost:8000/shop/review/${item.id}`,
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
				// navigate('/shop');
                console.log('editing')
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = (event) => {
		event.preventDefault();

		editReview();
		console.log('submit');
	};

	return (
		<div>
			<div className='card' style={{ width: '18rem', marginTop: '30px' }}>
				<div className='card-body' key={item.id}>
					<h5 className='card-title'>{item.review_title}</h5>
					<h6 className='card-subtitle mb-2 text-muted'>{item.owner}</h6>
					<p className='card-text'>{item.review_body}</p>
					{currentUser && currentUser.username === owner && (
						<div>
                            {
                                showing ? <div>Hello</div> :
                                <div> bye</div>
                            }
							<Button dark outline>
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
	);
}

export default Review;
