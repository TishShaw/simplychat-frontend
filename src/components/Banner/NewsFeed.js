import React from 'react';
import { TbArrowBadgeRight } from 'react-icons/tb';
import { TbArrowBadgeRightFilled } from 'react-icons/tb';
import { RxDoubleArrowRight } from 'react-icons/rx';

const NewsFeed = () => {
	const handleSubmit = {};
	return (
		<div className='news-container'>
			<div className='news-wrapper'>
				<div className='news-header'>
					<h1 className='news-title'>JOIN OUR VIP CLUB</h1>
					<p className='news-paragraph'>
						Sign up for a newsletter to announce sales, new products and
						updates.
					</p>
				</div>
				<form onClick={handleSubmit} className='news-form'>
					<input
						type='text'
						className='news-input'
						placeholder='email@example.com'
					/>
					<button type='submit' className='newsBtn'>
						<RxDoubleArrowRight />
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewsFeed;
