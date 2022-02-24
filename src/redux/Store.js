import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index';

const composeEnhancers = composeWithDevTools({});


const initialStore = {
	cartReducer: {
		cartItems: JSON.parse(localStorage.getItem('cartItems')) ?? [],
	},
	favoriteReducer: {
		favoriteItems: JSON.parse(localStorage.getItem('favoriteItem')) ?? [],
	},
};

export const store = createStore(reducer, initialStore, composeEnhancers());
