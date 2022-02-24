import React, {useEffect, useState, useContext} from 'react';
import { ProductContext } from '../../Context';
import './styles/Eyes.css';

function Eyes() {
	const { product } = useContext(ProductContext);
	const [eyes, setEyes] = useState([])

	const filterEyes = () => {
		const eyes = product.filter((item) => {
			if(item.category_name === 'eyes') {
				return item.item
			}
			return item
		})
		setEyes(eyes)
	}

	useEffect(() => {
		filterEyes()
	},[])
	
    return (
			<div className='eyes'>
				<h1 className='eyes-title'>Eyes</h1>
				<div className='eyes-content'>
					{
						eyes.map((item) => {
							return(
								<div key={item.id}>
									<img src={item.image} />
									<p>{item.item}</p>
									<p>{item.price}</p>
								</div>
							)
						})
					}
                </div>
			</div>
		);
}

export default Eyes;