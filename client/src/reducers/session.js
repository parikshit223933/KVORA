import {
	ADD_QUESTION_FAILURE,
	ADD_QUESTION_START,
	ADD_QUESTION_SUCCESS,
} from "../actions/actionTypes";

let currentSessionState = {
	notifications: [],
	posts: [],
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
		default:
			return state;
	}
}
