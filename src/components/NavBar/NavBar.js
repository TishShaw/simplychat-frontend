import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Bag from '../../assets/images/icons8-bag-64.png';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../Cart/CartItem';

import { ProductContext } from '../../Context';
import './NavBar.styles.css';

function NavBar(props) {
	const { handleThisLogout, login } = useContext(ProductContext);
	const cartItems = useSelector((state) => state.cartItems);
	console.log(cartItems);

	const dispatch = useDispatch();
	return (
		<div>
			<div className='navbar-header'>
				<p className='paragraph-banner'>
					FREE SHIPPING ON ANY U.S. ORDER | FREE RETURNS
				</p>
			</div>

			<nav
				className='navbar navbar-expand-lg navbar-light bg-pink-900'
				light='true'>
				<div className='container-fluid navbar-logo'>
					<Link className='navbar-brand fw-bold fs-50 text-white ' to='/'>
						<h2 className='logo-title'>Keita's Beauty</h2>
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='true'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link
									className='nav-link active text-white'
									aria-current='page'
									to='/shop'>
									Shop All
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link active text-white'
									aria-current='page'
									to='/face'>
									Face
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link active text-white'
									aria-current='page'
									to='/lips'>
									Lips
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link active text-white'
									aria-current='page'
									to='/eyes'>
									Eyes
								</Link>
							</li>
						</ul>
						<div className='nav-right'>
							{login ? (
								<div
									light
									md
									outline
									className='nav-right-item'
									onClick={handleThisLogout}>
									<Link to='/shop'>Log Out</Link>
								</div>
							) : (
								<div light md outline className='nav-right-item'>
									<Link to='/login'>Log In </Link>|
									<Link to='/signup'> Sign Up</Link>
								</div>
							)}
							{/* {cartItems.length > 0 && (
								<Badge pill>{cartItems.reduce((a, c) => a + c, 0)}</Badge>
							)} */}

							<div className='nav-right'>
								<Link to={`/cart`}>
									<img src={Bag} alt='' className='nav-cart' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
