export const API_ROOT = "http://localhost:8000/api/v1";

export const API_URLS = {
	signUp: () => `${API_ROOT}/user/sign-up`,
	signIn: () => `${API_ROOT}/user/sign-in`,
	refreshAuth: () => `${API_ROOT}/user/refresh-auth`,
	createQuestionPost: () => `${API_ROOT}/question/create`,
	fetchAllNotifications: () => `${API_ROOT}/notification/fetch-all`,
	fetchAllPosts: () => `${API_ROOT}/post/fetch-all`,
	fetchAllQuestions: () => `${API_ROOT}/question/fetch-all`,
	addAnswer: () => `${API_ROOT}/answer/add-answer`,
	createDraft: () => `${API_ROOT}/draft/create-draft`,
	fetchUserDrafts: () => `${API_ROOT}/draft/fetch-all`,
};
