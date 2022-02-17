import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FaveCard from '../FaveCard/FaveCard';

function Favorites(props) {
    const [fave, setFave] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/shop/favorites/')
        .then(res => setFave(res.data))
    },[])

    if(!fave) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {
                fave.map((fav) => (
                    
                        <FaveCard 
                            key={fav.id}
                            fav={fav}
                            image={fav.image}
                            name={fav.item}
                        />
                    
                ))
            }
        </div>
    );
}

export default Favorites;