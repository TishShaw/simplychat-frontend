import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.styles.css';

function NavBar(props) {
	return (
		<nav className='navbar navbar-expand-lg navbar-light py-3bg-light shadow-sm'>
			<div className='container-fluid'>
				<Link className='navbar-brand fw-bold fs-40' to='/'>
					Keita's Beauty
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/shop'>
								Shop All
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/face'>
								Face
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/lips'>
								Lips
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/eyes'>
								Eyes
							</Link>
						</li>
					</ul>
					<div className='nav-right'>
						<i class='fa-solid fa-user nav-right-item'></i>
						<div className='nav-right-item login'>Login</div>
						<i class='fa-solid fa-bag-shopping nav-right-item'></i>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
