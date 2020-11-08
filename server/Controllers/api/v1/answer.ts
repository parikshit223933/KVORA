import express from 'express';
import UtilClass from '../../../utility/utils.js';
const util = new UtilClass();
import StatusCodes from 'http-status-codes';
import Question from '../../../models/question.js';
import Answer from '../../../models/answer.js';
import Post from '../../../models/post.js';
import Notification from '../../../models/notification.js';
import User from '../../../models/user.js';
// req.body => {answer, questionId}
// req.user => { id }
export const addAnswer = async (req: express.Request, res: express.Response) => {
	const { answerInBody, questionId }: { answerInBody: string; questionId: string } = req.body;
	const { id: userId }: { id: string } = req.user as any;

	if (!answerInBody) {
		return util.response(res, StatusCodes.BAD_REQUEST, "Message Field can't be empty", false);
	}

	if (!questionId || !userId) {
		return util.response(
			res,
			StatusCodes.BAD_REQUEST,
			'Something went wrong. Please try again!',
			false
		);
	}
	const question = await Question.findById(questionId);
	if (!question) {
		return util.response(
			res,
			StatusCodes.FORBIDDEN,
			'This Question is probably deleted!',
			false
		);
	}
	const user = await User.findById(userId);
	const post = await Post.findOne({ question: questionId as any });

	const answer = await Answer.create({
		author: user.id,
		associatedQuestion: question.id,
		content: answerInBody,
	});
	const notification = await Notification.create({
		user: user.id,
		description: `You answered the question "${question.content}"`,
		associatedQuestion: question.id,
	});
	question.answers.push({ answer: answer.id });
	user.answers.push({ answer: answer.id });
	post.answers.push({ answer: answer.id });

	post.save();
	question.save();
	user.save();
	notification.save();
	answer.save();

	return util.response(res, StatusCodes.OK, 'Asnwered', true, {
		answer: {
			answerId: answer.id,
		},
		notification: {
			notificationId: notification.id,
			description: notification.description,
			associatedQuestion: question.content,
			updatedAt: (notification as any).updatedAt,
			createdAt: (notification as any).createdAt,
		},
	});
	// Notification
	// Post
	// User
	// Question
	// Answer
};
