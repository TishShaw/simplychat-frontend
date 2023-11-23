import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLogout } from '../../redux/actions/userAction';
import { CLEAR_SHOPPING_CART } from '../../redux/constants/cartConstants';
import BagIcon from '../../assets/images/icons8-bag-64.png';
import HeartIcon from '../../assets/images/icons8-favorite-50.png';
import UserIcon from '../../assets/images/icons8-user-64.png';

import './NavBar.styles.css';

const NavBar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showDropDown, setShowDropDown] = useState(false);
	const userLogin = useSelector((state) => state.userLogin);
	const { userData } = userLogin;
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const logout = () => {
		dispatch(getUserLogout());
		dispatch({ type: CLEAR_SHOPPING_CART });
		navigate('/');
	};

	return (
		<>
			<div className='navbar-header'>
				<p className='paragraph-banner'>
					FREE SHIPPING ON ANY U.S. ORDER | FREE RETURNS
				</p>
			</div>
			<nav class='navbar navbar-expand-lg bg-body-tertiary navbar-container z-3'>
				<div class='container-fluid'>
					<h2 className='logo-title navbar-brand'>
						<Link to='/'>Keita's Beauty</Link>
					</h2>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon mobileIcon'>
							<i class='fa-solid fa-bars'></i>
						</span>
					</button>
					<div class='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
							<li class='nav-item'>
								<Link class='nav-link active' aria-current='page' to='/shop'>
									Shop All
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' to='/face'>
									Face
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' to='/eyes'>
									Eyes
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' to='/lips'>
									Lips
								</Link>
							</li>
						</ul>
						<form class='d-flex' role='search'>
							<input
								class='form-control me-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
						</form>
						<div>
							<div className='nav-right'>
								<div className='nav-right'>
									<Link to={`/wishlist`}>
										<img src={HeartIcon} alt='' className='nav-cart' />
									</Link>
								</div>
								<div className='nav-right'>
									<Link to={`/cart`}>
										<img src={BagIcon} alt='' className='nav-cart' />
										<span className='nav-cart-length'>{cartItems.length}</span>
									</Link>
								</div>

								{userData.length > 0 ? (
									<div class='nav-right' onClick={() => setShowDropDown(true)}>
										<img src={UserIcon} alt='' className='nav-cart' />
										<i class='fa-solid fa-caret-down downArrow'></i>
									</div>
								) : (
									<div class='nav-right '>
										<Link to='/login'>
											<img src={UserIcon} alt='' className='nav-cart' />
										</Link>
									</div>
								)}
								{showDropDown && (
									<div className='dropDownMenu'>
										<button
											type='button'
											class='btn btn-outline-dark'
											onClick={logout}
										>
											Logout
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
