import { GET_PRODUCTS } from '../../constants/productConstants';

import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    const { data } = await axios.get(
			'https://desolate-brushlands-04983.herokuapp.com/shop/'
		);
    console.log(data);

    dispatch({
        type: GET_PRODUCTS,
        payload: data
    })
}