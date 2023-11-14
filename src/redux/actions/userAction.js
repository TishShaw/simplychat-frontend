import {
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_FAILED,
	USER_SIGNUP_SUCCESSFUL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESSFUL,
	USER_LOGIN_FAILED,
	USER_INFO_REQUEST,
	USER_INFO_FAILED,
	USER_INFO_SUCCESSFUL,
	USER_LOGOUT,
} from '../constants/userConstants';

import axios from 'axios';

export const createSignUp = (formData) => async (dispatch) => {
	try {
		dispatch({ type: USER_SIGNUP_REQUEST });

		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'https://keitabeautybackend-a0275470644f.herokuapp.com/users/',
			formData,
			config
		);

		dispatch({
			type: USER_SIGNUP_SUCCESSFUL,
			payload: data,
		});

		localStorage.setItem('userData', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_SIGNUP_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const getUserInfo = (token) => async (dispatch) => {
	try {
		dispatch({ type: USER_INFO_REQUEST });

		const { data } = await axios.get(
			'https://keitabeautybackend-a0275470644f.herokuapp.com/users/me',
			{
				headers: {
					Authorization: `Token ${token}`,
				},
			}
		);

		dispatch({
			type: USER_INFO_SUCCESSFUL,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_INFO_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const getUserLogin = (formData) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'https://keitabeautybackend-a0275470644f.herokuapp.com/token/login',
			formData,
			config
		);
		console.log(data);

		dispatch({
			type: USER_LOGIN_SUCCESSFUL,
			payload: data,
		});

		localStorage.setItem('userData', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAILED,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const getUserLogout = () => (dispatch) => {
	localStorage.removeItem('userData');
	localStorage.removeItem('userInfo');
	localStorage.removeItem('cartItems');
	dispatch({
		type: USER_LOGOUT,
	});
};
