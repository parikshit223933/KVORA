import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import { IUser } from './user';
import { IQuestion } from './question';
import { IComment } from './comment';

export interface IAnswer extends mongoose.Document {
	author: mongoose.Schema.Types.ObjectId | IUser;
	content: string;
	associatedQuestion: mongoose.Schema.Types.ObjectId | IQuestion;
	views: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
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
	shares: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	comments: [
		{
			comment: mongoose.Schema.Types.ObjectId | IComment;
		}
	];
}

const answerSchema = new mongoose.Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		content: {
			type: String,
		},
		associatedQuestion: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question',
		},
		views: [
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
		downvotes: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		shares: [
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
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, path.join(__dirname, '..', './uploads', './answers', './images'));
	},
	filename(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

answerSchema.statics.uploadedAvatar = multer({
	storage,
}).single('image');

export default mongoose.model<IAnswer>('Answer', answerSchema);
