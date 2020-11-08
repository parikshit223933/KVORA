import express from 'express';
import User from '../../../models/user.js';
import Answer from '../../../models/answer.js';
import Question from '../../../models/question.js';
import Draft from '../../../models/draft.js';
import Notification from '../../../models/notification.js';
import UtilClass from '../../../utility/utils.js';
import StatusCodes from 'http-status-codes';
const util = new UtilClass();

// req.body => {answer, questionId}
// req.user => { id }
export const createDraft = async (req: express.Request, res: express.Response) => {
	const { answer: answerInBody, questionId }: { answer: string; questionId: string } = req.body;
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
	try {
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

		const answer = await Answer.create({
			author: user.id,
			associatedQuestion: question.id,
			content: answerInBody,
		});

		const draft = await Draft.create({
			user: user.id,
			answer: answer.id,
			question: question.id,
		});

		const notification = await Notification.create({
			user: user.id,
			description: `Draft saved for the question "${question.content}"`,
			associatedQuestion: question.id,
		});

		draft.save();
		notification.save();

		return util.response(res, StatusCodes.OK, 'Draft saved', true, {
			notification: {
				notificationId: notification.id,
				description: notification.description,
				associatedQuestion: question.content,
				updatedAt: (notification as any).updatedAt,
				createdAt: (notification as any).createdAt,
			},
		});

		// Question
		// User
		// Draft
		// Answer
	} catch (error) {
		// tslint:disable-next-line: no-console
		console.log(error);
		return util.response(res);
	}
};
