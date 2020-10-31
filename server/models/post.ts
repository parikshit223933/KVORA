import mongoose from 'mongoose';
import { IQuestion } from './question';
import { IUser } from './user';
import { ISpace } from './space';
import { IShare } from './share';

export interface IPost extends mongoose.Document {
	type: string;
	question: mongoose.Schema.Types.ObjectId | IQuestion;
	answer: mongoose.Schema.Types.ObjectId | IAnswer;
	author: mongoose.Schema.Types.ObjectId | IUser;
	thanks: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	upvotes: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	shares: [
		{
			share: mongoose.Schema.Types.ObjectId | IShare;
		}
	];
	comments: [
		{
			comment: mongoose.Schema.Types.ObjectId | IComment;
		}
	];
	associatedSpaces: [
		{
			space: mongoose.Schema.Types.ObjectId | ISpace;
		}
	];
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
		answer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Answer',
		},
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

export default mongoose.model<IPost>('Post', postSchema);
