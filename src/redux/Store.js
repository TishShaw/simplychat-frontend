import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/CartReducer';
import {
	productsReducer,
	productsDetailsReducer,
	productReviewReducer,
} from './reducers/ProductReducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

const reducer = combineReducers({
	cart: cartReducer,
	product: productsReducer,
	productDetails: productsDetailsReducer,
	productCreateReview: productReviewReducer,
	userLogin: userLoginReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const getShippingAdressFromStorage = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: [];

const getProductsFromStorage = localStorage.getItem('products')
	? JSON.parse(localStorage.getItem('products'))
	: [];

const getUserFromStorage = localStorage.getItem('userData')
	? JSON.parse(localStorage.getItem('userData'))
	: [];

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
		shippingAddress: getShippingAdressFromStorage,
	},
	product: {
		products: getProductsFromStorage,
	},
	userLogin: {
		userData: getUserFromStorage,
	},
};

export const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
