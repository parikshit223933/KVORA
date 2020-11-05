import express from 'express';
import UtilClass from '../../../utility/utils.js';
import StatusCodes from 'http-status-codes';
const util = new UtilClass();
import Post, { IPostDocument } from '../../../models/post.js';
import { IQuestionDocument } from '../../../models/question.js';
import { IUserDocument } from '../../../models/user.js';

export const getAllPosts = async (req: express.Request, res: express.Response) => {
	const userIdInRequest: any = req.user;
	try {
		const allUserPosts = await Post.find({ author: userIdInRequest._id })
			.populate('question')
			.populate('author');

		return util.response(res, StatusCodes.OK, 'User Posts', true, {
			posts: allUserPosts.map((post, index) => {
				return {
					postId: post.id,
					question: (post.question as IQuestionDocument).content,
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
