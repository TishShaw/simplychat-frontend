import React, { useContext } from 'react';
import { ProductContext } from '../../Context';
import { Navigate } from 'react-router-dom';
function Favorites(props) {
	const { product, login } = useContext(ProductContext);

	
	if(!login) {
		return <Navigate to='/login' />;
	}
	return (
		<div>
			<i class='fa-solid fa-heart'></i>
		</div>
	);
}

export default Favorites;
