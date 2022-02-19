import React, {useState, useEffect} from 'react';
import './styles/Face.css';

function Face({product}) {
    // const [faceProduct, setFaceProduct] = useState([])

    // const filterProducts = () => {
    //     const face = product.filter(item => {
    //         if(item.category_name === 'face'){
	// 			return item.item
	// 		}
        
    //     })
    //     setFaceProduct(face)
    // }
    
	// useEffect(() => {
	// 	filterProducts()
	// })
    return (
			<div className='face'>
				<h1 className='face-title'>Face</h1>
				{/* {faceProduct.map((item) => {
					return (
						<div key={item.id}>
							<img src={item.image} />
							<p>{item.item}</p>
							<p>{item.price}</p>
						</div>
					);
				})} */}
			</div>
		);
}

export default Face;