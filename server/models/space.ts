import mongoose from 'mongoose';
import path from 'path';
import multer from 'multer';
import { IUserDocument } from './user';
import { IPostDocument } from './post';
import { IQuestionDocument } from './question';

export interface ISpaceDocument extends mongoose.Document {
	name: string;
	cover: string;
	avatar: string;
	about: string;
	details: string;
	followers: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	admins: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	contributors: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	kvoraId: string;
	posts: [
		{
			post: mongoose.Schema.Types.ObjectId | IPostDocument;
		}
	];
	questions: [
		{
			question: mongoose.Schema.Types.ObjectId | IQuestionDocument;
		}
	];
	updatedAt?: Date;
	createdAt?: Date;
}

export interface ISpaceModel extends mongoose.Model<ISpaceDocument> {
	uploadedAvatar(...args: any[]): any;
}

const spaceSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		cover: {
			type: String,
		},
		avatar: {
			type: String,
		},
		about: {
			type: String,
		},
		details: {
			type: String,
		},
		followers: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		admins: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		contributors: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		kvoraId: {
			type: String,
		},
		posts: [
			{
				post: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Post',
				},
			},
		],
		questions: [
			{
				question: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Question',
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
		cb(null, path.join(__dirname, '..', './uploads', './spaces', './avatars'));
	},
	filename(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

spaceSchema.statics.uploadedAvatar = multer({
	storage,
}).single('avatar');

export default mongoose.model<ISpaceDocument, ISpaceModel>('Space', spaceSchema);
