import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from './Context';
import NavBar from './components/NavBar/NavBar';
import Homepage from './pages/Homepage';
import Shoppage from './pages/Shoppage';
import axios from 'axios';
import ProductDetail from './components/Products/ProductList';

function App() {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:8000/shop/').then((res) => {
			console.log(res.data);
			setProduct(res.data);
		});
	}, []);

	return (
		<div>
			<NavBar />
			<ProductContext.Provider
				value={{
					product
				}}>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/shop' element={<Shoppage />} />
					<Route path='/:id' element={<ProductDetail />} />
				</Routes>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
