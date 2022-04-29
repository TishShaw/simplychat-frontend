import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeProductReview } from '../redux/actions/productAction/productAction';
import { UserContext } from '../Context';
import { BsTrash } from 'react-icons/bs';

function DeleteBtn({ item }) {
	const { token } = useContext(UserContext);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();

		dispatch(removeProductReview(item.id, token));
		navigate('/shop');
	};

	return (
		<div>
			<button onClick={handleDelete}>
				<BsTrash />
			</button>
		</div>
	);
}

export default DeleteBtn;
