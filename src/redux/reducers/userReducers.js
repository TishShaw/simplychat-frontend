import {
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_FAILED,
	USER_SIGNUP_SUCCESSFUL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESSFUL,
	USER_LOGIN_FAILED,
	USER_LOGOUT,
} from '../constants/userConstants';

export const userSignUpReducer = (state = {}, action) => {
	switch (action.payload) {
		case USER_SIGNUP_REQUEST:
			return {
				...state,
				loading: true,
			};

		case USER_SIGNUP_SUCCESSFUL:
			return {
				...state,
				loading: false,
				success: true,
				userData: action.payload,
			};

		case USER_SIGNUP_FAILED:
			return {
				...state,
				success: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			};

		case USER_LOGIN_SUCCESSFUL:
			return {
				...state,
				loading: false,
				success: true,
				userData: action.payload,
			};

		case USER_LOGIN_FAILED:
			return {
				loading: false,
				success: false,
				error: action.payload,
			};
		case USER_LOGOUT:
			return {};

		default:
			return state;
	}
};
