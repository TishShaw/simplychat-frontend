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
		
			<div className='favorites'>
				<h1>My Favorites</h1>
				<div className="card" style={{width: "18rem"}}>
					<img src={product.image} className="card-img-top" alt="..." />
					<div className="card-body">
						<p className="card-text">
							{product.item}
						</p>
					</div>
				</div>
			</div>
			
		
	);
}

export default Favorites;
