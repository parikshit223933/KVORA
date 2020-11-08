import express from 'express';
import Question from '../../../models/question.js';
import User, { IUserDocument } from '../../../models/user.js';
import Post from '../../../models/post.js';
import Notification from '../../../models/notification.js';
import Util from '../../../utility/utils.js';
import StatusCodes from 'http-status-codes';
import POST_TYPES from '../../../constants/POST_TYPES.js';
const util = new Util();

// req.body => { question, associatedLink, isPublic, isAnonymous, isLimited }
// req.user => { id, firstName, lastName, email }

// AFFECTED MODELS
// user
// question
// post
// notification
export const create = async (req: express.Request, res: express.Response) => {
	const questionInBody: string = req.body.question;
	const associatedLinkInBody: string = req.body.associatedLink;
	const userInBody: any = req.user;

	// tslint:disable-next-line: no-eval
	const isPublic: boolean = eval(req.body.isPublic);
	// tslint:disable-next-line: no-eval
	const isAnonymous: boolean = eval(req.body.isAnonymous);
	// tslint:disable-next-line: no-eval
	const isLimited: boolean = eval(req.body.isLimited);

	if (!(!(isPublic && isAnonymous) && !(isAnonymous && isLimited) && !(isLimited && isPublic))) {
		return util.response(res, StatusCodes.FORBIDDEN, 'Something went wrong!', false);
	}

	try {
		const user = await User.findById(userInBody._id);

		if (!user) {
			return util.response(res, StatusCodes.FORBIDDEN, 'Something Went wrong!', false);
		}
		const question = await Question.create({
			author: user.id,
			content: questionInBody,
			contextLink: associatedLinkInBody,
			isPublic,
			lastFollowedAt: Date.now(),
			isLimited,
			isAnonymous,
			isAQuestion: true,
			isASharedLink: false,
		});

		user.questions.push(question.id);
		question.followers.push(user.id);

		const post = await Post.create({
			type: POST_TYPES.COMPOSED,
			question: question.id,
			author: user.id,
		});

		const notification = await Notification.create({
			user: user.id,
			description: 'New question posted successfully!',
			associatedQuestion: question.id,
		});

		user.save();
		question.save();
		post.save();
		notification.save();

		return util.response(res, StatusCodes.OK, 'Question Posted Successfully!', true, {
			notification: {
				notificationId: notification.id,
				description: notification.description,
				associatedQuestion: question.content,
				updatedAt: (notification as any).updatedAt,
				createdAt: (notification as any).createdAt,
			},
			post: {
				postId: post.id,
				question: question.content,
				contextLink: question.contextLink,
				upvotes: post.upvotes,
				shares: post.shares,
				comments: post.comments,
				updatedAt: (post as any).updatedAt,
				createdAt: (post as any).createdAt,
				author: isAnonymous
					? {
							firstName: 'Anonymous',
							lastName: 'User',
							email: 'Anonymous',
							id: 'Anonymous',
					  }
					: {
							firstName: user.firstName,
							lastName: user.lastName,
							email: user.email,
							id: user.id,
					  },
			},
		});
	} catch (error) {
		// tslint:disable-next-line: no-console
		console.log(error);
		// internal server error
		return util.response(res);
	}
};

export const getAllQuestions = async (req: express.Request, res: express.Response) => {
	const allQuestions = await Question.find({}).populate('author');
	return util.response(res, StatusCodes.OK, 'All Questions', true, {
		questions: allQuestions.map((ques) => {
			return {
				questionId:ques.id,
				content: ques.content,
				contextLink: ques.contextLink,
				answers: ques.answers,
				followers: ques.followers,
				lastFollowedAt: ques.lastFollowedAt,
				isAnonymous: ques.isAnonymous,
				isLimited: ques.isLimited,
				isPublic: ques.isPublic,
				isAQuestion: ques.isAQuestion,
				isASharedLink: ques.isASharedLink,
				associatedSpace: ques.associatedSpace || null,
				createdAt: (ques as any).createdAt,
				updatedAt: (ques as any).updatedAt,
				author: {
					firstName: (ques.author as IUserDocument).firstName,
					lastName: (ques.author as IUserDocument).lastName,
					email: (ques.author as IUserDocument).email,
					id: (ques.author as IUserDocument).id,
				},
			};
		}),
	});
};
