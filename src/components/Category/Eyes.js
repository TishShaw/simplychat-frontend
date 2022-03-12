import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction/productAction';
import { Button } from 'bootstrap-4-react';
import Rating from '../Rating/Rating';
import './styles/Eyes.css';

function Eyes() {
	const [eyes, setEyes] = useState([])

	const product = useSelector((state) => state.product);
	const { products } = product;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(product));
	}, []);

	const filterEyes = () => {
		const eyesFilter = products.filter((item) => {
			if (item.category_name === 'eyes') {
				return item.item;
			}
		});
		setEyes(eyesFilter);
	};


	useEffect(() => {
		filterEyes();
	},[])
	
    return (
			<div className='eyes'>
				<div className='eyes-headerImg'>
					<h1 className='eyes-title'>Eyes</h1>
				</div>
				<div className='eyes-content'>
					{
						eyes.map((item) => {
							return (
								<div key={item.id}>
									<img
										src={item.image}
										alt='ProductImage'
										className='eyesImg'
									/>
									<p>{item.item}</p>
									<Rating />
									<p>{item.price}</p>
									<Button className='face-cartBtn'>VIEW</Button>

									<Button className='face-cartBtn'>ADD TO CART</Button>
								</div>
							);
						})
					}
                </div>
			</div>
		);
}

export default Eyes;