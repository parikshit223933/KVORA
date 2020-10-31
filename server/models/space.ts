import mongoose from 'mongoose';
import path from 'path';
import multer from 'multer';
import { IUser } from './user';
import { IPost } from './post';
import { IQuestion } from './question';

export interface ISpace extends mongoose.Document {
	name: string;
	cover: string;
	avatar: string;
	about: string;
	details: string;
	followers: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	admins: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	contributors: [
		{
			user: mongoose.Schema.Types.ObjectId | IUser;
		}
	];
	kvoraId: string;
	posts: [
		{
			post: mongoose.Schema.Types.ObjectId | IPost;
		}
	];
	questions: [
		{
			question: mongoose.Schema.Types.ObjectId | IQuestion;
		}
	];
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

export default mongoose.model<ISpace>('Space', spaceSchema);
