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
						<img className='d-block w-100' src={HeroImage} alt='First slide' />
					</div>
					<div className='carousel-item'>
						<img
							className='d-block w-100'
							src={HeroImage2}
							alt='Second slide'
						/>
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100' src={HeroImage3} alt='Third slide' />
					</div>
				</div>
				<a
					className='carousel-control-prev'
					href='#carouselExampleControls'
					role='button'
					data-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span className='sr-only'>Previous</span>
				</a>
				<a
					className='carousel-control-next'
					href='#carouselExampleControls'
					role='button'
					data-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span className='sr-only'>Next</span>
				</a>
			</div>
		);
}

export default Hero;