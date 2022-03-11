import React from 'react';
import mascarabanner from '../../assets/images/mascara.png';
import shadowbanner from '../../assets/images/shadow.png';
import lipsbanner from '../../assets/images/lipgloss.png';
import blushbanner from '../../assets/images/powder.png';
import './Banner.styles.css';

function Banner(props) {
    return (
			<div className='banner-container'>
				<div className='banner'>
					<img src={mascarabanner} alt='' className='banner-image' />
					<img src={shadowbanner} alt='' className='banner-image' />
					<img src={lipsbanner} alt='' className='banner-image' />
					<img src={blushbanner} alt='' className='banner-image' />
				</div>
			</div>
		);
}

export default Banner;