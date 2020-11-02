import {
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
	error: false,
	success: false,
};

export default function auth(state = currentAuthState, action) {
	switch (action.type) {
		case SIGNUP_START:
			return {
				...state,
				inProgress: true,
				isLoggedIn: false,
				error: false,
				success: false,
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
				inProgress: false,
				success: false,
				error: false,
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
		default:
			return state;
	}
}
