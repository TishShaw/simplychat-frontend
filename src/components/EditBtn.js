import React, { useState } from 'react';
import { Button } from 'bootstrap-4-react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCT_REVIEW } from '../redux/constants/productConstants';
import { updateProductReview } from '../redux/actions/productAction/productAction';

function EditBtn({ item, handleEditShowing }) {
    console.log(item.id);
	const [showing, setShowing] = useState(false);
	const dispatch = useDispatch();

	return (
		<div>
			<Button dark outline onClick={handleEditShowing}>
				Edit
			</Button>
		</div>
	);
}

export default EditBtn;
