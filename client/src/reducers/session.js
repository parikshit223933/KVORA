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
	REFRESH_NOTIFICATION_DATA_FAILURE,
	REFRESH_NOTIFICATION_DATA_START,
	REFRESH_NOTIFICATION_DATA_SUCCESS,
	REFRESH_POSTS_DATA_FAILURE,
	REFRESH_POSTS_DATA_START,
	REFRESH_POSTS_DATA_SUCCESS,
} from "../actions/actionTypes";

let currentSessionState = {
	notifications: [],
	posts: [],
	questions: [],
	inProgress: false,
	error: null,
	success: null,
};

export default function session(state = currentSessionState, action) {
	switch (action.type) {
		case ADD_QUESTION_START:
			return {
				...state,
				inProgress: true,
				error: false,
				success: false,
			};
		case ADD_QUESTION_SUCCESS:
			let new_notifications_array = [
				action.notification,
				...state.notifications,
			];
			let new_post_array = [action.post, ...state.posts];
			return {
				...state,
				notifications: new_notifications_array,
				posts: new_post_array,
				inProgress: false,
				success: true,
			};
		case ADD_QUESTION_FAILURE:
			return {
				...state,
				error: action.error,
				inProgress: false,
			};
		case REFRESH_NOTIFICATION_DATA_START:
			return {
				...state,
				inProgress: true,
				error: false,
				success: false,
			};
		case REFRESH_NOTIFICATION_DATA_SUCCESS:
			return {
				...state,
				inProgress: false,
				success: true,
				notifications: action.notifications,
			};
		case REFRESH_NOTIFICATION_DATA_FAILURE:
			return {
				...state,
				error: action.error,
				inProgress: false,
			};
		case REFRESH_POSTS_DATA_START:
			return {
				...state,
				inProgress: true,
				error: false,
				success: false,
			};
		case REFRESH_POSTS_DATA_SUCCESS:
			return {
				...state,
				inProgress: false,
				success: true,
				posts: action.posts,
			};
		case REFRESH_POSTS_DATA_FAILURE:
			return {
				...state,
				error: action.error,
				inProgress: false,
			};
		case FETCH_ALL_QUESTIONS_START:
			return {
				...state,
				inProgress: true,
				error: false,
				success: false,
			};
		case FETCH_ALL_QUESTIONS_SUCCESS:
			return {
				...state,
				inProgress: false,
				success: false,
				questions: action.questions,
			};
		case FETCH_ALL_QUESTIONS_FAILURE:
			return {
				...state,
				inProgress: false,
				error: action.error,
			};
		case ADD_ANSWER_START:
			return {
				...state,
				inProgress: true,
				error: false,
				success: false,
			};
		case ADD_ANSWER_SUCCESS:
			return {
				...state,
				inProgress: false,
				success: true,
				notifications: [action.notification, ...state.notifications],
				questions: state.questions.map((question) => {
					return {
						...question,
						answers: [action.answer.answerId, ...question.answers],
					};
				}),
			};
		case ADD_ANSWER_FAILURE:
			return {
				...state,
				error: action.error,
				inProgress: false,
			};
		case CREATE_DRAFT_START:
			return {
				...state,
				inProgress: true,
				error: false,
				success: false,
			};
		case CREATE_DRAFT_SUCCESS:
			return {
				...state,
				notifications: [action.notification, ...state.notifications],
				inProgress: false,
				success: true,
			};
		case CREATE_DRAFT_FAILURE:
			return {
				...state,
				error: action.error,
				inProgress: false,
			};
		default:
			return state;
	}
}
