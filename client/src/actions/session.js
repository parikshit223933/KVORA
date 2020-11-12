import { API_URLS } from "../helpers/urls";
import {
	ADD_ANSWER_FAILURE,
	ADD_ANSWER_START,
	ADD_ANSWER_SUCCESS,
	ADD_QUESTION_FAILURE,
	ADD_QUESTION_START,
	ADD_QUESTION_SUCCESS,
	CREATE_DRAFT_FAILURE,
	CREATE_DRAFT_START,
	CREATE_DRAFT_SUCCESS,
	FETCH_ALL_QUESTIONS_FAILURE,
	FETCH_ALL_QUESTIONS_START,
	FETCH_ALL_QUESTIONS_SUCCESS,
	FETCH_DRAFTS_FAILURE,
	FETCH_DRAFTS_START,
	FETCH_DRAFTS_SUCCESS,
	REFRESH_NOTIFICATION_DATA_FAILURE,
	REFRESH_NOTIFICATION_DATA_START,
	REFRESH_NOTIFICATION_DATA_SUCCESS,
	REFRESH_POSTS_DATA_FAILURE,
	REFRESH_POSTS_DATA_START,
	REFRESH_POSTS_DATA_SUCCESS,
	UPVOTE_ANSWER_FAILURE,
	UPVOTE_ANSWER_START,
	UPVOTE_ANSWER_SUCCESS,
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

// FETCH ALL QUESTIONS
export const fetchAllQuestionsStart = () => {
	return {
		type: FETCH_ALL_QUESTIONS_START,
	};
};
export const fetchAllQuestionsSuccess = (questions) => {
	return {
		type: FETCH_ALL_QUESTIONS_SUCCESS,
		questions,
	};
};
export const fetchAllQuestionsFailure = (error) => {
	return {
		type: FETCH_ALL_QUESTIONS_FAILURE,
		error,
	};
};
export const fetchAllQuestions = () => {
	return (dispatch) => {
		const url = API_URLS.fetchAllQuestions();
		dispatch(fetchAllQuestionsStart());
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
					dispatch(fetchAllQuestionsSuccess(data.data.questions));
					return;
				}
				dispatch(fetchAllQuestionsFailure(data.message));
			});
	};
};

export const addAnswerStart = () => {
	return {
		type: ADD_ANSWER_START,
	};
};
export const addAnswerSuccess = (answer, notification) => {
	return {
		type: ADD_ANSWER_SUCCESS,
		notification,
		answer,
	};
};
export const addAnswerFailure = (error) => {
	return {
		type: ADD_ANSWER_FAILURE,
		error,
	};
};
export const addAnswer = (answer, questionId) => {
	return (dispatch) => {
		const url = API_URLS.addAnswer();
		dispatch(addAnswerStart());
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthtokenFromLocalStorage()}`,
			},
			body: formUrlEncoded({ answer, questionId }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					dispatch(
						addAnswerSuccess(
							data.data.answer,
							data.data.notification
						)
					);
					return;
				}
				dispatch(addAnswerFailure(data.message));
			});
	};
};

export const createDraftStart = () => {
	return {
		type: CREATE_DRAFT_START,
	};
};
export const createDraftSuccess = (notification) => {
	return {
		type: CREATE_DRAFT_SUCCESS,
		notification,
	};
};
export const createDraftFailure = (error) => {
	return {
		type: CREATE_DRAFT_FAILURE,
		error,
	};
};
export const createDraft = (answer, questionId) => {
	return (dispatch) => {
		const url = API_URLS.createDraft();
		dispatch(createDraftStart());
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthtokenFromLocalStorage()}`,
			},
			body: formUrlEncoded({ answer, questionId }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					dispatch(createDraftSuccess(data.data.notification));
					return;
				}
				dispatch(createDraftFailure(data.message));
			});
	};
};

export const fetchDraftsStart = () => {
	return {
		type: FETCH_DRAFTS_START,
	};
};
export const fetchDraftsSuccess = (drafts) => {
	return {
		type: FETCH_DRAFTS_SUCCESS,
		drafts,
	};
};
export const fetchDraftsFailure = (error) => {
	return {
		error,
		type: FETCH_DRAFTS_FAILURE,
	};
};
export const fetchDrafts = () => {
	return (dispatch) => {
		const url = API_URLS.fetchUserDrafts();
		dispatch(fetchDraftsStart());
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
					dispatch(fetchDraftsSuccess(data.data.drafts));
					return;
				}
				dispatch(fetchDraftsFailure(data.message));
			});
	};
};

export const upvoteAnswerStart = () => {
	return {
		type: UPVOTE_ANSWER_START,
	};
};
export const upvoteAnswerSuccess = (answer, notification) => {
	return {
		type: UPVOTE_ANSWER_SUCCESS,
		answer,
		notification,
	};
};
export const upvoteAnswerFailure = (error) => {
	return {
		error,
		type: UPVOTE_ANSWER_FAILURE,
	};
};
export const upvoteAnswer = (answer_id) => {
	return (dispatch) => {
		const url = API_URLS.upvoteAnswer();
		dispatch(upvoteAnswerStart());
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthtokenFromLocalStorage()}`,
			},
			body: formUrlEncoded({ answer_id }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					dispatch(
						upvoteAnswerSuccess(
							data.data.answer,
							data.data.notification
						)
					);
					return;
				}
				dispatch(upvoteAnswerFailure(data.message));
			});
	};
};
