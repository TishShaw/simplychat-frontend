import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/CartReducer';
import { userLoginReducer, userInfoReducer } from './reducers/userReducers';
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
	userInfo: userInfoReducer,
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

const getUserInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
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
	userInfo: {
		userInfo: getUserInfoFromStorage,
	},
};

export const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
