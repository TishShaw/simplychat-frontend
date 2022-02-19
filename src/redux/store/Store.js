import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer }from '../reducers/productReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const initialReducerState = {};

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
});

const store = createStore(
	reducer,
	initialReducerState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
