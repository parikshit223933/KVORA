import mongoose from 'mongoose';
import { IUserDocument } from './user';
import { ITopicDocument } from './topic';
import { ISpaceDocument } from './space';
import { IAnswerDocument } from './answer';
import { ICommentDocument } from './comment';
export interface IQuestionDocument extends mongoose.Document {
	author: mongoose.Schema.Types.ObjectId | IUserDocument;
	content: string;
	contextLink: string;
	answers: [
		{
			answer: mongoose.Schema.Types.ObjectId | IAnswerDocument;
		}
	];
	followers: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	comments: [
		{
			comment: mongoose.Schema.Types.ObjectId | ICommentDocument;
		}
	];
	downvotes: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	relatedTopics: [
		{
			topic: mongoose.Schema.Types.ObjectId | ITopicDocument;
		}
	];
	isPublic: boolean;
	isAnonymous: boolean;
	isLimited: boolean;
	isAQuestion: boolean;
	isASharedLink: boolean;
	linkDescription: string;
	associatedSpace: mongoose.Schema.Types.ObjectId | ISpaceDocument;
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

export default mongoose.model<IQuestionDocument>('Question', questionSchema);
