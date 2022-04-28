import React from 'react';
import { Link } from 'react-router-dom';
import { MdMailOutline, MdRoom } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
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
					<li>
						<Link to='/face'>Face Products</Link>
					</li>
					<li>
						<Link to='/eyes'>Eye Products</Link>
					</li>
					<li>
						<Link to='/lips'>Lip Products</Link>
					</li>
				</ul>
			</div>
			<div className='footer-contact-section'>
				<h1 className='footer-title'>Get In Touch</h1>
				<ul>
					<li>
						<MdRoom /> 234 Haynes St, Arlington VA 22202
					</li>
					<li>
						<BsFillTelephoneFill /> 123 456 7893
					</li>
					<li>
						<a href='mailto:tishtanya.shaw24@gmail.com'>
							<MdMailOutline /> tishtanya.shaw24@gmail.com
						</a>
					</li>
				</ul>
				<img src='https://i.ibb.co/Qfvn4z6/payment.png' alt='payment types' />
			</div>
		</div>
	);
}

export default Footer;
