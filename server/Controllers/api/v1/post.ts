import express from 'express';
import UtilClass from '../../../utility/utils.js';
import StatusCodes from 'http-status-codes';
const util = new UtilClass();
import Post from '../../../models/post.js';
import { IQuestionDocument } from '../../../models/question.js';
import { IUserDocument } from '../../../models/user.js';
import { IAnswerDocument } from '../../../models/answer.js';
import Answer from '../../../models/answer.js';
import Notification from '../../../models/notification.js';

export const getAllPosts = async (req: express.Request, res: express.Response) => {
	const userInRequest: any = req.user;
	try {
		const allUserPosts = await Post.find({ author: userInRequest._id })
			.populate('question')
			.populate('answers.answer')
			.populate('author')
			.sort({ 'answers.answer.upvotes.length': 'desc' });
		if (allUserPosts.length === 0) {
			return util.response(res, StatusCodes.OK, 'User Posts', true, {
				posts: [],
			});
		}
		return util.response(res, StatusCodes.OK, 'User Posts', true, {
			posts: allUserPosts.map((post, index) => {
				return {
					postId: post.id,
					question: (post.question as IQuestionDocument).content,
					popularAnswer: post.answers[0]
						? {
								answerId: (post.answers[0].answer as IAnswerDocument).id,
								answerContent: (post.answers[0].answer as IAnswerDocument).content,
								createdAt: (post.answers[0].answer as IAnswerDocument).createdAt,
								updatedAt: (post.answers[0].answer as IAnswerDocument).updatedAt,
								upvotes: (post.answers[0].answer as IAnswerDocument).upvotes,
								likedByUser: (post.answers[0].answer as IAnswerDocument).upvotes
									.map((upvote) => {
										return upvote.user.toString();
									})
									.includes(userInRequest._id.toString()),
								dislikedByUser: (post.answers[0]
									.answer as IAnswerDocument).downvotes
									.map((downvote) => {
										return downvote.user.toString();
									})
									.includes(userInRequest._id.toString()),
								downvotes: (post.answers[0].answer as IAnswerDocument).downvotes,
								views: (post.answers[0].answer as IAnswerDocument).views,
						  }
						: undefined,
					contextLink: (post.question as IQuestionDocument).contextLink,
					upvotes: post.upvotes,
					shares: post.shares,
					comments: post.comments,
					updatedAt: (post as any).updatedAt,
					createdAt: (post as any).createdAt,
					author: (post.question as IQuestionDocument).isAnonymous
						? {
								firstName: 'Anonymous',
								lastName: 'User',
								email: 'Anonymous',
								id: `Anonymous-${index}`,
						  }
						: {
								firstName: (post.author as IUserDocument).firstName,
								lastName: (post.author as IUserDocument).lastName,
								email: (post.author as IUserDocument).email,
								id: (post.author as IUserDocument).id,
						  },
				};
			}),
		});
	} catch (error) {
		// tslint:disable-next-line: no-console
		console.log(error);
		return util.response(res);
	}
};

// UPVOTE ANSWER
// req.body => {answer_id}
export const UpvoteAnswer = async (req: express.Request, res: express.Response) => {
	try {
		// tslint:disable-next-line: variable-name
		const user_id = (req.user as IUserDocument).id;
		const answer_id: string = req.body.answer_id;
		if (!answer_id) {
			return util.response(res, StatusCodes.FORBIDDEN, 'No such answer found', false);
		}
		const answer = await Answer.findById(answer_id);
		const notification = await Notification.create({
			user: user_id,
			description: 'You have just liked an answer',
			associatedQuestion: answer.associatedQuestion,
			associatedAnswer: answer.id,
		});

		notification.save();

		const newUpvotesArray: any = [];
		let likedByUser = true;

		answer.downvotes = answer.downvotes.filter((downvote) => {
			if (downvote.user.toString() === user_id.toString()) {
				return false;
			}
			return true;
		}) as any;

		answer.upvotes.forEach((upvote) => {
			if (upvote.user.toString() !== user_id.toString()) {
				newUpvotesArray.push(upvote);
			}
		});

		if (newUpvotesArray.length === answer.upvotes.length) {
			answer.upvotes.push({ user: user_id });
		} else {
			likedByUser = false;
			answer.upvotes = newUpvotesArray;
		}

		answer.save();

		return util.response(res, StatusCodes.OK, 'Upvoted answer', true, {
			answer: {
				answerId: answer.id,
				answerContent: answer.content,
				createdAt: answer.createdAt,
				updatedAt: answer.updatedAt,
				upvotes: answer.upvotes,
				likedByUser,
				dislikedByUser: false,
				downvotes: answer.downvotes,
				views: answer.views,
			},
			notification: {
				notificationId: notification.id,
				description: notification.description,
				associatedQuestion: notification.associatedQuestion,
				updatedAt: notification.updatedAt,
				createdAt: notification.createdAt,
			},
		});
	} catch (error) {
		// tslint:disable-next-line: no-console
		console.log(error);
		return util.response(res);
	}
};

// req.body => {answer_id}
export const downVoteAnswer = async (req: express.Request, res: express.Response) => {
	const answer_id: string = req.body.answer_id;
	// tslint:disable-next-line: variable-name
	const user_in_body = req.user as IUserDocument;

	if (!answer_id) {
		return util.response(res, StatusCodes.FORBIDDEN, 'Answer does not exist', false);
	}

	try {
		const answer = await Answer.findById(answer_id);
		if (!answer) {
			return util.response(res, StatusCodes.FORBIDDEN, 'Answer does not exist', false);
		}
		let dislikedByUser = false;
		answer.upvotes = answer.upvotes.filter((upvote) => {
			if (upvote.user.toString() === user_in_body.id.toString()) {
				return false;
			}
			return true;
		}) as any;

		if (answer.downvotes.find((obj) => obj.user.toString() === user_in_body.id.toString())) {
			answer.downvotes = answer.downvotes.filter((downvote) => {
				return downvote.user.toString() !== user_in_body.id.toString();
			}) as any;
		} else {
			dislikedByUser = true;
			answer.downvotes.push({ user: user_in_body.id });
		}

		answer.save();

		const notification = await Notification.create({
			user: user_in_body.id,
			description: 'You have just liked an answer',
			associatedQuestion: answer.associatedQuestion,
			associatedAnswer: answer.id,
		});

		notification.save();

		return util.response(res, StatusCodes.OK, 'Down voted answer!', true, {
			answer: {
				answerId: answer.id,
				answerContent: answer.content,
				createdAt: answer.createdAt,
				updatedAt: answer.updatedAt,
				upvotes: answer.upvotes,
				likedByUser: false,
				dislikedByUser,
				downvotes: answer.downvotes,
				views: answer.views,
			},
			notification: {
				notificationId: notification.id,
				description: notification.description,
				associatedQuestion: notification.associatedQuestion,
				updatedAt: notification.updatedAt,
				createdAt: notification.createdAt,
			},
		});
	} catch (error) {
		// tslint:disable-next-line: no-console
		console.log(error);
		return util.response(res);
	}
};
