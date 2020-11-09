import mongoose from 'mongoose';
import { IUserDocument } from './user';

export interface ICommentDocument extends mongoose.Document {
	isRootComment: boolean;
	content: string;
	upvotes: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	downvotes: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	reports: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	parent: mongoose.Schema.Types.ObjectId | ICommentDocument;
	directChildren: [
		{
			comment: mongoose.Schema.Types.ObjectId | ICommentDocument;
		}
	];
	updatedAt?: Date;
	createdAt?: Date;
}

const commnetSchema = new mongoose.Schema(
	{
		isRootComment: {
			type: Boolean,
			required: true,
			default: false,
		},
		content: {
			type: String,
			required: true,
		},
		upvotes: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
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
		reports: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		parent: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
		},
		directChildren: [
			{
				comment: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Comment',
				},
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

export default mongoose.model<ICommentDocument>('Comment', commnetSchema);
