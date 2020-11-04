import { API_URLS } from "../helpers/urls";
import {
	ADD_QUESTION_FAILURE,
	ADD_QUESTION_START,
	ADD_QUESTION_SUCCESS,
	REFRESH_NOTIFICATION_DATA_FAILURE,
	REFRESH_NOTIFICATION_DATA_START,
	REFRESH_NOTIFICATION_DATA_SUCCESS,
	REFRESH_POSTS_DATA_FAILURE,
	REFRESH_POSTS_DATA_START,
	REFRESH_POSTS_DATA_SUCCESS,
} from "./actionTypes";
import { getAuthtokenFromLocalStorage } from "../helpers/utils";
import formUrlEncoded from "form-urlencoded";

// ADD NEW QUESTION
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

// REFRESH NOTIFICATIONS DATA
export const refreshNotificationDataStart = () => {
	return {
		type: REFRESH_NOTIFICATION_DATA_START,
	};
};
export const refreshNotificationDataSuccess = (notifications) => {
	return {
		type: REFRESH_NOTIFICATION_DATA_SUCCESS,
		notifications,
	};
};
export const refreshNotificationDataFailure = (error) => {
	return {
		type: REFRESH_NOTIFICATION_DATA_FAILURE,
		error,
	};
};
export const refreshNotificationData = () => {
	return (dispatch) => {
		const url = API_URLS.fetchAllNotifications();
		dispatch(refreshNotificationDataStart());
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthtokenFromLocalStorage()}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					dispatch(
						refreshNotificationDataSuccess(data.data.notifications)
					);
				} else {
					dispatch(refreshNotificationDataFailure(data.message));
				}
			});
	};
};

// REFRESH POSTS DATA
export const refreshPostsDataStart = () => {
	return {
		type: REFRESH_POSTS_DATA_START,
	};
};
export const refreshPostsDataSuccess = (posts) => {
	return {
		type: REFRESH_POSTS_DATA_SUCCESS,
		posts,
	};
};
export const refreshPostsDataFailure = (error) => {
	return {
		type: REFRESH_POSTS_DATA_FAILURE,
		error,
	};
};
export const refreshPostsData = () => {
	return (dispatch) => {
		const url = API_URLS.fetchAllPosts();
		dispatch(refreshPostsDataStart());
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthtokenFromLocalStorage()}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					dispatch(refreshPostsDataSuccess(data.data.posts));
				} else {
					dispatch(refreshPostsDataFailure(data.message));
				}
			});
	};
};
