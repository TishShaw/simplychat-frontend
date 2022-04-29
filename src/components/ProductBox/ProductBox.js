import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import Review from '../Reviews/Reviews';
import './ProductBox.styles.css';

function ProductBox({ product }) {
	const [selectedTab, setSelectedTab] = useState(0);
	const handleChange = (event, newValue) => {
		event.preventDefault();
		setSelectedTab(newValue);
	};
	return (
		<div position='static' className='ProductBox-container'>
			<div className='tabs-container'>
				<Tabs
					className='ProductBox-Tab__container'
					value={selectedTab}
					variant='scrollable'
					scrollButtons='auto'
					onChange={handleChange}
					>
					<Tab label='Description' className='tab-title active-tab' />
					<Tab label='Reviews' className='tab-title' />
					<Tab label='Shipping & Returns' className='tab-title' />
					<Tab label='Privacy Policy' className='tab-title' />
				</Tabs>
			</div>
			<div>
				{selectedTab === 0 && (
					<p>
						<br />
						{product.description}
					</p>
				)}
			</div>
			<div>{selectedTab === 1 && <Review product={product} />}</div>
			<div>
				{selectedTab === 2 && (
					<>
						<br />
						<div>
							<h4>Return and Refund Policy</h4>
							<p>Last updated: March 09, 2022</p>
							<p>Thank you for shopping at Keita Beauty.</p>
							<p>
								If, for any reason, You are not completely satisfied with a
								purchase We invite You to review our policy on refunds and
								returns. This Return and Refund Policy has been created with the
								help of the{' '}
								<a
									href='https://www.termsfeed.com/return-refund-policy-generator/'
									target='_blank'
									rel='noreferrer'>
									Return and Refund Policy Generator
								</a>
								.
							</p>
							<p>
								The following terms are applicable for any products that You
								purchased with Us.
							</p>

							<h4>Your Order Cancellation Rights</h4>
							<p>
								You are entitled to cancel Your Order within 7 days without
								giving any reason for doing so.
							</p>
							<p>
								The deadline for cancelling an Order is 7 days from the date on
								which You received the Goods or on which a third party you have
								appointed, who is not the carrier, takes possession of the
								product delivered.
							</p>
							<p>
								In order to exercise Your right of cancellation, You must inform
								Us of your decision by means of a clear statement. You can
								inform us of your decision by:
							</p>
						</div>
					</>
				)}
			</div>
			<div>
				{selectedTab === 3 && (
					<>
						<br />
						<h4>Security of Your Personal Data</h4>
						<p>
							The security of Your Personal Data is important to Us, but
							remember that no method of transmission over the internet, or
							method of electronic storage is 100% secure. While we strive to
							use commercially acceptable means to protect Your Personal Data,
							We cannot guarantee its absolute security.
						</p>
					</>
				)}
			</div>
		</div>
	);
}

export default ProductBox;
