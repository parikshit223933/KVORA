import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import { IUserDocument } from './user';
import { IQuestionDocument } from './question';
import { ICommentDocument } from './comment';
import { IShareDocument } from './share';

export interface IAnswerDocument extends mongoose.Document {
	author: mongoose.Schema.Types.ObjectId | IUserDocument;
	content: string;
	associatedQuestion: mongoose.Schema.Types.ObjectId | IQuestionDocument;
	views?: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	upvotes?: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	downvotes?: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	shares?: [
		{
			user: mongoose.Schema.Types.ObjectId | IShareDocument;
		}
	];
	comments?: [
		{
			comment: mongoose.Schema.Types.ObjectId | ICommentDocument;
		}
	];
	updatedAt?: Date;
	createdAt?: Date;
}

export interface IAnswerModel extends mongoose.Model<IAnswerDocument> {
	uploadedAvatar(...args: any[]): any;
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

export default mongoose.model<IAnswerDocument, IAnswerModel>('Answer', answerSchema);
