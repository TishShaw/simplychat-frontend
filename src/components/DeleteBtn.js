import React from 'react';
import { Button } from 'bootstrap-4-react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_PRODUCT_REVIEW_SUCCESSFUL } from '../redux/constants/productConstants';
import { removeProductReview } from '../redux/actions/productAction/productAction';

function DeleteBtn({ item }) {
    const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();

		dispatch(removeProductReview(item.id));
	};
	return (
		<div>
			<Button dark outline onClick={handleDelete}>
				Delete
			</Button>
		</div>
	);
}

export default DeleteBtn;