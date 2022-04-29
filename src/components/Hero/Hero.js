import React from 'react';
import HeroImage from '../../assets/images/3.png';
import HeroImage2 from '../../assets/images/4.png';
import HeroImage3 from '../../assets/images/shopnow.png';
import './Hero.styles.css';

function Hero(props) {
    return (
			<div
				id='carouselExampleControls'
				className='carousel slide'
				data-ride='carousel'>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img
							className='d-block heroImage'
							src={HeroImage}
							alt='First slide'
						/>
					</div>
					<div className='carousel-item'>
						<img
							className='d-block heroImage'
							src={HeroImage2}
							alt='Second slide'
						/>
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100 heroImage' src={HeroImage3} alt='Third slide' />
					</div>
				</div>
			</div>
		);
}

export default Hero;