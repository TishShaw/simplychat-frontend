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
					<ul>
						<li>Beauty</li>
						<li>Make up</li>
						<li>Make up</li>
					</ul>
				</div>
			</div>
		);
}

export default Banner;