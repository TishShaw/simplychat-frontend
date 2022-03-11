import { combineReducers } from 'redux';
import { cartReducer } from './CartReducer';
import { favoriteReducer } from './FavoriteReducer';
import { productsReducer } from './ProductReducers';

const reducer = combineReducers({
	cartReducer: cartReducer,
	favoriteReducer: favoriteReducer,
	productsReducer: productsReducer,
});

export default reducer;