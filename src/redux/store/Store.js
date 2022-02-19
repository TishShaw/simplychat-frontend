import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productListReducer from '../reducers/productReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const initialReducerState = {};

const reducer = combineReducers({
	productList: productListReducer,
});

const store = createStore(
	reducer,
	initialReducerState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
