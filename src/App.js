import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shoppage from './pages/Shoppage';
import ProductDetail from './components/Products/ProductDetails';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Lips from './components/Category/Lips';
import Face from './components/Category/Face';
import Eyes from './components/Category/Eyes';
import Cart from './components/Cart/Cart';
import FavoritesPage from './pages/FavoritesPage';
import Layout from './Layout';
import Checkout from './Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import AuthProvider from './context/AuthProvider';

function App() {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/lips' element={<Lips />} />
					<Route path='/face' element={<Face />} />
					<Route path='/eyes' element={<Eyes />} />
					<Route path='/login' element={<Login />} />
					<Route path='/shop' element={<Shoppage />} />
					<Route path='/wishlist' element={<FavoritesPage />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/cart/:id' element={<Cart />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/:id' element={<ProductDetail />} />
					<Route path='/checkoutpage' element={<Checkout />} />
					<Route path='/orderConfirmation' element={<OrderConfirmation />} />
				</Routes>
			</Layout>
		</AuthProvider>
	);
}

export default App;
