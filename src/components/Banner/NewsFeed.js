import React from 'react';

function NewsFeed(props) {

    const handleSubmit = {}
    return (
			<div className='news-container'>
				<div className='news-wrapper'>
					<div className='news-header'>
						<h1 className='news-title'>JOIN OUR VIP CLUB</h1>
						<p className='news-paragraph'>
							sign up for a newsletter to announce sales, new products and
							updates.
						</p>
					</div>
					<form onClick={handleSubmit} className='news-form'>
						<input
							type='text'
							className='news-input'
							placeholder='email@example.com'
						/>
						<input type='submit' className='newsBtn' value='Go' />
					</form>
				</div>
			</div>
		);
}

export default NewsFeed;