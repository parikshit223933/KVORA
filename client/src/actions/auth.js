import {
	REFRESH_AUTH_FAILURE,
	REFRESH_AUTH_START,
	REFRESH_AUTH_SUCCESS,
	SIGNIN_FAILURE,
	SIGNIN_START,
	SIGNIN_SUCCESS,
	SIGNUP_FAILURE,
	SIGNUP_START,
	SIGNUP_SUCCESS,
} from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import formUrlEncoded from "form-urlencoded";
import { getAuthtokenFromLocalStorage } from "../helpers/utils";

// SIGN UP
export const signUpStart = () => {
	return {
		type: SIGNUP_START,
	};
};
export const signUpSuccess = (firstName, lastName, email) => {
	return {
		type: SIGNUP_SUCCESS,
		firstName,
		lastName,
		email,
	};
};
export const signUpFailure = (error) => {
	return {
		type: SIGNUP_FAILURE,
		error,
	};
};
export const signUp = (firstName, lastName, email, password) => {
	return (dispatch) => {
		const url = API_URLS.signUp();
		dispatch(signUpStart());
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formUrlEncoded({ firstName, lastName, email, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					localStorage.setItem("kvoraToken", data.data.token);
					dispatch(
						signUpSuccess(
							data.data.user.firstName,
							data.data.user.lastName,
							data.data.user.email
						)
					);
					return;
				}
				dispatch(signUpFailure(data.message));
			});
	};
};

// SIGN IN
export const signInStart = () => {
	return {
		type: SIGNIN_START,
	};
};
export const signInSuccess = (user) => {
	return {
		user,
		type: SIGNIN_SUCCESS,
	};
};
export const signInFailure = (error) => {
	return {
		error,
		type: SIGNIN_FAILURE,
	};
};
export const signIn = (email, password) => {
	return (dispatch) => {
		const url = API_URLS.signIn();
		dispatch(signInStart());
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formUrlEncoded({ email, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					dispatch(signInSuccess(data.data.user));
					localStorage.setItem("kvoraToken", data.data.token);
					return;
				}
				dispatch(signInFailure(data.message));
			});
	};
};

// REFRESH AUTH
export const refreshAuthStart=()=>
{
	return{
		type: REFRESH_AUTH_START
	}
}
export const refreshAuthSuccess = (user)=>
{
	return{
		type:REFRESH_AUTH_SUCCESS,
		user
	}
}
export const refreshAuthFailure=(error)=>
{
	return{
		error,
		type:REFRESH_AUTH_FAILURE
	}
}
export const refreshAuth=(email, userId)=>
{
	return dispatch=>
	{
		const url=API_URLS.refreshAuth();
		dispatch(refreshAuthStart());
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				'Authorization': `Bearer ${getAuthtokenFromLocalStorage()}`
			},
			body: formUrlEncoded({ email, userId }),
		})
		.then(res=>res.json())
		.then(data=>
			{
				if(data.success)
				{
					dispatch(refreshAuthSuccess(data.data.user));
					return;
				}
				dispatch(refreshAuthFailure(data.message));
			})
	}
}