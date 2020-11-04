import {
	LOG_OUT,
	REFRESH_AUTH_FAILURE,
	REFRESH_AUTH_START,
	REFRESH_AUTH_SUCCESS,
	SIGNIN_FAILURE,
	SIGNIN_START,
	SIGNIN_SUCCESS,
	SIGNUP_FAILURE,
	SIGNUP_START,
	SIGNUP_SUCCESS,
} from "../actions/actionTypes";

let currentAuthState = {
	user: {
		firstName: "",
		lastName: "",
		email: "",
	},
	inProgress: false,
	isLoggedIn: false,
	error: null,
	success: null,
};

export default function auth(state = currentAuthState, action) {
	switch (action.type) {
		case SIGNUP_START:
			return {
				...state,
				inProgress: true,
				isLoggedIn: false,
				error: null,
				success: null,
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				user: {
					firstName: action.firstName,
					lastName: action.lastName,
					email: action.email,
				},
				inProgress: false,
				isLoggedIn: true,
				success: true,
			};
		case SIGNUP_FAILURE:
			return {
				...state,
				inProgress: false,
				isLoggedIn: false,
				error: action.error,
				success: false,
			};
		case SIGNIN_START:
			return {
				...state,
				inProgress: true,
				success: null,
				error: null,
			};
		case SIGNIN_SUCCESS:
			return {
				...state,
				user: action.user,
				inProgress: false,
				isLoggedIn: true,
				success: true,
			};
		case SIGNIN_FAILURE:
			return {
				...state,
				inProgress: false,
				isLoggedIn: false,
				error: action.error,
			};
		case REFRESH_AUTH_START:
			return {
				...state,
				inProgress: true,
				success: null,
				error: null,
			};
		case REFRESH_AUTH_SUCCESS:
			return {
				...state,
				user: action.user,
				success: true,
				inProgress: false,
				isLoggedIn: true,
			};
		case REFRESH_AUTH_FAILURE:
			return {
				...state,
				success: false,
				error: action.error,
				inProgress: false,
				isLoggedIn: false,
			};
		case LOG_OUT:
			return {
				user: {
					firstName: "",
					lastName: "",
					email: "",
				},
				inProgress: false,
				isLoggedIn: false,
				error: null,
				success: true,
			};
		default:
			return state;
	}
}
