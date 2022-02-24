import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';
import { ProductContext } from '../../Context';
import './NavBar.styles.css';

function NavBar(props) {
	const { handleThisLogout, login} = useContext(ProductContext);
	const {id} = useParams()
	

	return (
		<nav className='navbar navbar-expand-lg navbar-light py-3bg-light'>
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
					<ul className='navbar-nav mx-auto mb-2 mb-lg-0 nav-collapse'>
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
							<Button
								light
								md
								outline
								className='nav-right-item'
								onClick={handleThisLogout}>
								<Link to='/shop'>Log Out</Link>
							</Button>
						) : (
							<Button light md outline className='nav-right-item'>
								<Link to='/login'>Log In</Link>
							</Button>
						)}
						<Link to={`/cart/${id}?`}>
							<i className='fa-solid fa-bag-shopping nav-right-item text-white'></i>
						</Link>
						<Link to='/Favorites' className='nav-right-item'>
							<i className='fa-solid fa-heart text-white '></i>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
