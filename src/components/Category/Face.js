import React, {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../../Context';
import './styles/Face.css';

function Face() {

	const { product } = useContext(ProductContext);
    const [faceProduct, setFaceProduct] = useState([])

    const filterProducts = () => {
        const face = product.filter(item => {
            if(item.category_name === 'face'){
				return item.item
			}
        
        })
        setFaceProduct(face)
    }
    
	useEffect(() => {
		filterProducts()
	})
    return (
			<div className='face'>
				<div className='face-headerImg'>
					<h1 className='face-title'>Face</h1>
				</div>
				{faceProduct.map((item) => {
					return (
						<div key={item.id}>
							<img src={item.image} />
							<p>{item.item}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</div>
		);
}

export default Face;