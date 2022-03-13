import React, { useContext } from 'react';
import { ProductContext } from '../../Context';
import { Button } from 'bootstrap-4-react';
import './Features.styles.css';
import { Link } from 'react-router-dom';
import Redlip from '../../assets/images/redlip.jpg';
import Banner from '../../assets/images/mediumbanner.png';

function Features() {

	return (
		<div className='features'>
			<h1 className='features-title'>
				Best<span className='span'>Sellers</span>
			</h1>
			<div className='best'>
				<div className='best-item'>
					<img className='best-image' src={Redlip} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={Redlip} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={Redlip} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={Redlip} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
				</div>
				<div className='best-item'>
					<img className='best-image' src={Redlip} alt='' />
					<p className='best-name'>Bold Red Lip</p>
					<p className='best-price'>$ 8.50</p>
				</div>
			</div>

			<Button dark outline className='bestBtn'>
				<Link to='/shop'>Shop Best Sellers</Link>
			</Button>
			<div>
				<img src={Banner} alt='' className='bannerImg' />
			</div>
		</div>
	);
}

export default Features;
