import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../Context';
import './styles/Lips.styles.css';

function Lips() {
	const { product } = useContext(ProductContext);
	const [lipProducts, setLipProducts] = useState([]);

	const filterLips = () => {
		const lipsFilter = product.filter((item) => {
			if (item.category_name === 'lips') {
				return item.item;
			}
		});
		setLipProducts(lipsFilter);
	};

	useEffect(() => {
		filterLips();
	}, []);

	return (
		<div className='lips'>
			<div className='lips-headerImg'>
				<h1 className='lips-title'>Lips</h1>
			</div>
			<div className='lips-content'>
				{lipProducts.map((item) => {
					return (
						<div>
							<div key={item.id}>
								<img src={item.image} />
								<p>{item.item}</p>
								<p>{item.price}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Lips;
