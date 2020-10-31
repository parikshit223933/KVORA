import mongoose from 'mongoose';
import { IUser } from './user';

export interface IComment extends mongoose.Document {
	isRootComment: boolean;
	content: string;
	upvotes: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	downvotes: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	reports: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	parent: mongoose.Schema.Types.ObjectId | IComment;
	directChildren: [
		{
			comment: mongoose.Schema.Types.ObjectId | IComment;
		}
	];
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

export default mongoose.model<IComment>('Comment', commnetSchema);
