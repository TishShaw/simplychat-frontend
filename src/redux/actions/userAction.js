import {
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_FAILED,
	USER_SIGNUP_SUCCESSFUL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESSFUL,
	USER_LOGIN_FAILED,
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
			'https://desolate-brushlands-04983.herokuapp.com/users/',
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

export const getUserLogin = (formData) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'https://desolate-brushlands-04983.herokuapp.com/token/login',
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
	dispatch({
		type: USER_LOGOUT,
	});
};
