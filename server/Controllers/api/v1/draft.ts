import express from 'express';
import User from '../../../models/user.js';
import Answer, { IAnswerDocument } from '../../../models/answer.js';
import Question, { IQuestionDocument } from '../../../models/question.js';
import Draft, { IDraftDocument } from '../../../models/draft.js';
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

// FETCH ALL DRAFTS
// req.user => {id, email, firstName, lastName}
export const fetchUserDrafts = async (req: express.Request, res: express.Response) => {
	try {
		const drafts: IDraftDocument[] = await Draft.find({ user: (req.user as any).id })
			.populate('answer')
			.populate('question');

		if (drafts) {
			return util.response(res, StatusCodes.OK, 'All Drafts', true, {
				drafts: drafts.map((draft) => {
					return {
						question: (draft.question as IQuestionDocument).content,
						draftedAnswer: (draft.answer as IAnswerDocument).content,
						publishedAnswers: (draft.question as IQuestionDocument).answers,
						questionFollowers: (draft.question as IQuestionDocument).followers,
						lastFollowed: (draft.question as IQuestionDocument).lastFollowedAt,
						associatedSpace: (draft.question as IQuestionDocument).associatedSpace,
					};
				}),
			});
		}
	} catch (error) {
		// tslint:disable-next-line: no-console
		console.log(error);
		return util.response(res);
	}
};
