import React, { useState } from 'react';
import { Button } from 'bootstrap-4-react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCT_REVIEW } from '../redux/constants/productConstants';
import { updateProductReview } from '../redux/actions/productAction/productAction';
import { AiOutlineEdit } from 'react-icons/ai';

function EditBtn({ item, handleEditShowing }) {
	const [showing, setShowing] = useState(false);
	const dispatch = useDispatch();

	return (
		<div>
			<button dark outline onClick={handleEditShowing}>
				<AiOutlineEdit/>
			</button>
		</div>
	);
}

export default EditBtn;
