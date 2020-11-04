import { API_URLS } from "../helpers/urls";
import {
	ADD_QUESTION_FAILURE,
	ADD_QUESTION_START,
	ADD_QUESTION_SUCCESS,
} from "./actionTypes";
import { getAuthtokenFromLocalStorage } from "../helpers/utils";
import formUrlEncoded from "form-urlencoded";

export const addQuestionStart = () => {
	return {
		type: ADD_QUESTION_START,
	};
};
export const addQuestionSuccess = (notification, post) => {
	return {
		type: ADD_QUESTION_SUCCESS,
		notification,
		post,
	};
};
export const addQuestionFailure = (error) => {
	return {
		type: ADD_QUESTION_FAILURE,
		error,
	};
};
export const addQuestion = (
	question,
	associatedLink,
	user,
	isPublic,
	isAnonymous,
	isLimited
) => {
	return (dispatch) => {
		const url = API_URLS.createQuestionPost();
		dispatch(addQuestionStart());
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthtokenFromLocalStorage()}`,
			},
			body: formUrlEncoded({
				question,
				associatedLink,
				user,
				isPublic,
				isAnonymous,
				isLimited,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					dispatch(
						addQuestionSuccess(
							data.data.notification,
							data.data.post
						)
					);
					return;
				}
				dispatch(addQuestionFailure(data.message));
			});
	};
};
