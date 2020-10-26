import { SIGNUP_FAILURE, SIGNUP_START, SIGNUP_SUCCESS } from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import formUrlEncoded from "form-urlencoded";

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
