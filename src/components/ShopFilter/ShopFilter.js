import React from 'react';
import './ShopFilter.styles.css';

function ShopFilter(props) {
	return (
		<div className='shopFilter-container'>
			<div className='shopFilter-categories'>
				<div className='shopFilter-categoriesHeading'>
					<h3 className='shopFilter-categoriesHeading__title'>
						Shop By Categories
					</h3>
				</div>
				<ul className='column'>
					<li>All</li>
					<li>Face</li>
					<li>Eyes</li>
					<li>Lips</li>
				</ul>
			</div>
			<div className='shopFilter-availability'>
				<div className='shopFilter-categoriesHeading'>
					<h3 className='shopFilter-categoriesHeading__title'>Filter by</h3>
				</div>
				<div className='column'>
					<h5>Availability</h5>
					<input type='checkbox' className='checkbox' />
					<label className='outofstock-label'>Out of stock</label>
					<input type='checkbox' className='checkbox' />
					<label className='instock-label'>In stock</label>
				</div>
			</div>
			<div className='shopFilter-sort'>
				<div className='shopFilter-categoriesHeading'>
					<h3 className='shopFilter-sort__title'>Sort by</h3>
				</div>
				<ul className='column'>
					<li>Featured</li>
					<li>Best Selling</li>
					<li>Price, low to high</li>
					<li>Price, high to low</li>
				</ul>
			</div>
		</div>
	);
}

export default ShopFilter;
