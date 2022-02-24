import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';
import HeroImage from '../../assets/images/WelcometoKeitasBeauty.png';
import './Hero.styles.css';

function Hero(props) {
    return (
			<div className='hero'>
				<img src={HeroImage} alt='' />
				{/* <Button dark lg className='heroBtn'>
					<Link to='/shop'>Shop Now</Link>
				</Button> */}
			</div>
		);
}

export default Hero;