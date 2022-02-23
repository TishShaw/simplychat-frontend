import { combineReducers } from 'redux';
import { cartReducer } from './CartReducer';
import { favoriteReducer } from './FavoriteReducer';

const reducer = combineReducers({
	cartReducer: cartReducer,
	favoriteReducer: favoriteReducer,
});

export default reducer;