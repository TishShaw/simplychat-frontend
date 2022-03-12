import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductContext } from './Context';
import Homepage from './pages/Homepage';
import Shoppage from './pages/Shoppage';
import ProductDetail from './components/Products/ProductDetails';
import Login from './components/Auth/Login/Login';
import Favorites from './components/Favorites/Favorites';
import CheckoutPage from './pages/CheckoutPage';
import Signup from './components/Auth/Signup/Signup';
import Lips from './components/Category/Lips';
import Face from './components/Category/Face';
import Eyes from './components/Category/Eyes';
import Cart from './components/Cart/Cart';
import Layout from './Layout';

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	const [login, setLogin] = useState(
		localStorage.getItem('token') ? true : false
	);

	const getUser = async () => {
		try {
			const res = await fetch(
				'https://desolate-brushlands-04983.herokuapp.com/users/me/',
				{
					headers: {
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			);

			const data = await res.json();
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
		setLogin(true);
	};

	const handleThisLogout = async (token) => {
		try {
			const res = await fetch(
				'https://desolate-brushlands-04983.herokuapp.com/token/logout',
				{
					method: 'POST',
					headers: {
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			);

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
	}, [login]);

	return (
		<div>
			<ProductContext.Provider
				value={{
					handleThisLogout,
					currentUser,
					handleThisLogin,
					login,
				}}>
				<Layout>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route path='/lips' element={<Lips />} />
						<Route path='/face' element={<Face />} />
						<Route path='/eyes' element={<Eyes />} />
						<Route path='/login' element={<Login />} />
						<Route path='/shop' element={<Shoppage />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/cart/:id' element={<Cart />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/:id' element={<ProductDetail />} />
						<Route path='/Favorites' element={<Favorites />} />
						<Route path='/Checkout' element={<CheckoutPage />} />
					</Routes>
				</Layout>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
