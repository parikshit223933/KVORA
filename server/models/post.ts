import mongoose from 'mongoose';
import { IQuestionDocument } from './question';
import { IUserDocument } from './user';
import { ISpaceDocument } from './space';
import { IShareDocument } from './share';
import { ICommentDocument } from './comment';
import { IAnswerDocument } from './answer';

export interface IPostDocument extends mongoose.Document {
	type: string; // composed or share
	question: mongoose.Schema.Types.ObjectId | IQuestionDocument;
	answers?: [
		{
			answer: mongoose.Schema.Types.ObjectId | IAnswerDocument;
		}
	];
	author: mongoose.Schema.Types.ObjectId | IUserDocument;
	thanks?: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	upvotes?: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	shares?: [
		{
			share: mongoose.Schema.Types.ObjectId | IShareDocument;
		}
	];
	comments?: [
		{
			comment: mongoose.Schema.Types.ObjectId | ICommentDocument;
		}
	];
	associatedSpaces?: [
		{
			space: mongoose.Schema.Types.ObjectId | ISpaceDocument;
		}
	];
	updatedAt?: Date;
	createdAt?: Date;
}

const postSchema = new mongoose.Schema(
	{
		type: {
			type: String,
		},
		question: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question',
		},
		answers: [
			{
				answer: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
			},
		],
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		thanks: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		upvotes: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		shares: [
			{
				share: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Share',
				},
			},
		],
		comments: [
			{
				comment: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Comment',
				},
			},
		],
		associatedSpaces: [
			{
				space: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Space',
				},
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

export default mongoose.model<IPostDocument>('Post', postSchema);
