import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductContext } from './Context';
import NavBar from './components/NavBar/NavBar';
import Homepage from './pages/Homepage';
import Shoppage from './pages/Shoppage';
import axios from 'axios';
import ProductDetail from './components/Products/ProductList';
import Login from './components/Login/Login';
import Favorites from './components/Favorites/Favorites';
import Signup from './components/Signup/Signup';

function App() {
	const [product, setProduct] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);
	const [login, setLogin] = useState(
		localStorage.getItem('token') ? true : false
	);
	useEffect(() => {
		axios.get('http://localhost:8000/shop/').then((res) => {
			console.log(res.data);
			setProduct(res.data);
		});
	}, []);

	const getUser = async () => {
		try {
			const res = await fetch('http://localhost:8000/users/me/', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			const data = await res.json();
			console.log(data);
			if (data.detail === 'Invalid token.') {
				setCurrentUser(null);
				setLogin(false);
				return;
			} else {
				setCurrentUser(data);
				setLogin(true);
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleThisLogin = (token) => {
		localStorage.setItem('token', token);
		getUser();
		console.log(localStorage.getItem('token'));
		setLogin(true);
	};

	const handleThisLogout = async (token) => {
		console.log(localStorage.getItem('token'));
		try {
			const res = await fetch('http://localhost:8000/token/logout', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (res.status === 204) {
				alert('You have been logged out!');
				setLogin(false);
				setCurrentUser(null);
				localStorage.removeItem('token');
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (login) {
			getUser();
		}
	}, []);

	return (
		<div>
			<NavBar />
			<ProductContext.Provider
				value={{
					product,
				}}>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/shop' element={<Shoppage />} />
					<Route path='/:id' element={<ProductDetail />} />
					<Route path='/Favorites' element={<Favorites />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
