import mongoose from 'mongoose';
import { IUser } from './user';
import { ITopic } from './topic';
import { ISpace } from './space';
import { IAnswer } from './answer';
import { IComment } from './comment';
export interface IQuestion extends mongoose.Document {
	author: mongoose.Schema.Types.ObjectId | IUser;
	content: string;
	contextLink: string;
	answers: [
		{
			answer: mongoose.Schema.Types.ObjectId | IAnswer;
		}
	];
	followers: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	comments: [
		{
			comment: mongoose.Schema.Types.ObjectId | IComment;
		}
	];
	downvotes: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	relatedTopics: [
		{
			topic: mongoose.Schema.Types.ObjectId | ITopic;
		}
	];
	isPublic: boolean;
	isAnonymous: boolean;
	isLimited: boolean;
	isAQuestion: boolean;
	isASharedLink: boolean;
	linkDescription: string;
	associatedSpace: mongoose.Schema.Types.ObjectId | ISpace;
}
const questionSchema = new mongoose.Schema(
	{
		author: {
			user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		},
		content: {
			type: String,
		},
		contextLink: {
			type: String,
		},
		answers: [
			{
				answer: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Answer',
				},
			},
		],
		followers: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
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
		downvotes: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		relatedTopics: [
			{
				topic: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Topic',
				},
			},
		],
		isPublic: {
			type: Boolean,
			default: false,
		},
		isAnonymous: {
			type: Boolean,
			default: false,
		},
		isLimited: {
			type: Boolean,
			default: false,
		},
		isAQuestion: {
			type: Boolean,
		},
		isASharedLink: {
			type: Boolean,
		},
		linkDescription: {
			type: String,
			maxlength: 250,
		},
		associatedSpace: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Space',
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

export default mongoose.model<IQuestion>('Question', questionSchema);
