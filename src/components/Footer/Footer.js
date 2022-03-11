import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.style.css';

function Footer(props) {
	return (
		<div className='footer'>
			<div className='footer-customer-care'>
				<h1 className='footer-title'>Customer Care</h1>
				<ul>
					<li>Our Story</li>
					<li>Reviews</li>
					<li>Terms of Service</li>
					<Link to='/'>
						<li>Returns & Shipping</li>
					</Link>
					<li>FAQ</li>
				</ul>
			</div>
			<div className='footer-shop-section'>
				<h1 className='footer-title'>Shop</h1>
				<ul>
					<li>Shop All Products</li>
					<li>Face Products</li>
					<li>Eye Products</li>
					<li>Lip Products</li>
				</ul>
			</div>
			<div className='footer-contact-section'>
				<h1 className='footer-title'>Get In Touch</h1>
				<ul>
					<li>tishtanya.shaw24@gmail.com</li>
				</ul>
			</div>
			<div className='footer-affiliate-section'>
				<h1 className='footer-title'>Become An Affiliate</h1>
				<ul>
					<li>Sign Up Here</li>
				</ul>
			</div>

			<div id='copyright'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 mb-2 mb-lg-0'>
							<p className='text-center text-lg-left'>©2022 Keita's Beauty</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
