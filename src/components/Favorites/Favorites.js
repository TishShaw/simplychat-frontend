import React, { useContext } from 'react';
import { ProductContext } from '../../Context';
import { Navigate } from 'react-router-dom';
import './Favorites.styles.css';

function Favorites(props) {
	const { product, login } = useContext(ProductContext);

	
	if(!login) {
		return <Navigate to='/login' />;
	}
	return (
	
			<div className="card" style={{width: "18rem"}}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
			
		
	);
}

export default Favorites;
