import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLogout } from '../../redux/actions/userAction';

import Bag from '../../assets/images/icons8-bag-64.png';
import '../../styles/NavBar.styles.css';

function NavBar(props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userData } = userLogin;

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const logout = () => {
		dispatch(getUserLogout());
		navigate('/');
	};
	const [navbar, setNavbar] = useState(false)

	const handleClick = (e) => {
		e.preventDefault();
			setNavbar(!navbar)
	}

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
					<Link
						className='navbar-brand fw-bold fs-50 text-white '
						to='/'
						onClick={(e) => handleClick()}>
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
					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'
						open={navbar}>
						<ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link
									onClick={(e) => handleClick()}
									className='nav-link active text-white'
									aria-current='page'
									to='/shop'>
									Shop All
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									onClick={(e) => handleClick()}
									className='nav-link active text-white'
									aria-current='page'
									to='/face'>
									Face
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									onClick={(e) => handleClick()}
									className='nav-link active text-white'
									aria-current='page'
									to='/lips'>
									Lips
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									onClick={(e) => handleClick()}
									className='nav-link active text-white'
									aria-current='page'
									to='/eyes'>
									Eyes
								</Link>
							</li>
						</ul>
						<div className='nav-right'>
							{userData ? (
								<div
									light
									md
									outline
									className='nav-right-item'
									onClick={logout}>
									<Link to='/shop'>Log Out</Link>
								</div>
							) : (
								<div light md outline className='nav-right-item'>
									<Link to='/login'>Log In </Link>|
									<Link to='/signup'> Sign Up</Link>
								</div>
							)}
							{userData ? (
								<div className='nav-right'>
									<Link to={`/cart`}>
										<img src={Bag} alt='' className='nav-cart' />
										{cartItems.length}
									</Link>
								</div>
							) : (
								<div className='nav-right'>
									<Link to={`/cart`}>
										<img src={Bag} alt='' className='nav-cart' />
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
