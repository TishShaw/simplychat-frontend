import React from 'react';
import './ShopFilter.styles.css';

function ShopFilter({
	faceFilter,
	eyeFilter,
	lipFilter,
	productsFilter,
	handleFilterPrice,
	handleChange,
}) {
	return (
		<div className='shopFilter-container'>
			<div className='shopFilter-categories'>
				<div className='shopFilter-categoriesHeading'>
					<h3 className='shopFilter-categoriesHeading__title'>
						Shop By Categories
					</h3>
				</div>
				<ul className='column'>
					<li onClick={productsFilter}>Shop All Products</li>
					<li onClick={faceFilter}>Face</li>
					<li onClick={eyeFilter}>Eyes</li>
					<li onClick={lipFilter}>Lips</li>
				</ul>
			</div>
			<div className='shopFilter-availability'>
				<div className='shopFilter-categoriesHeading'>
					<h3 className='shopFilter-categoriesHeading__title'>Filter by</h3>
				</div>
				<div className='column'>
					<h5>Availability</h5>
					<form>
						<label className='outofstock-label'>
							Out of Stock
							<input
								type='checkbox'
								className='checkbox'
								value='outOfStock'
								onChange={handleChange}
							/>
						</label>
						<label className='instock-label'>
							In Stock
							<input
								type='checkbox'
								className='checkbox'
								value='inStock'
								onChange={handleChange}
							/>
						</label>
					</form>
				</div>
			</div>
			<div className='shopFilter-sort'>
				<div className='shopFilter-categoriesHeading'>
					<h3 className='shopFilter-sort__title'>Sort by</h3>
				</div>
				<div
					className='column'
					onClick={(e) => handleFilterPrice(e.target.value)}
				>
					<div value='lowToHigh'>Price, Low to High</div>
					<div value='highToLow'>Price, High to Low</div>
				</div>
			</div>
		</div>
	);
}

export default ShopFilter;
