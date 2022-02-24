import React from 'react';
import HeroImage from '../../assets/images/WelcometoKeitasBeauty.png';
import './Hero.styles.css';

function Hero(props) {
    return (
			<div className='hero'>
				<img src={HeroImage} alt='' />
			</div>
		);
}

export default Hero;