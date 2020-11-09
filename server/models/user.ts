import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import chalk from 'chalk';
import crypto from 'crypto';
import { INotificationDocument } from './notification';
import { ISpaceDocument } from './space';
import { ITopicDocument } from './topic';
import { ILogDocument } from './log';
import { IQuestionDocument } from './question';
import { IAnswerDocument } from './answer';
import { IShareDocument } from './share';
import { IPostDocument } from './post';
import { IEditDocument } from './edit';
import { IActivity } from './activity';
import { ISettingDocument } from './setting';
const passwordHashingAlgorithm = 'sha512';
const stringFormat = 'hex';
const randomBytesForPasswordSalt = 50;
const saltHashIterations = 5000;
const hashKeyLength = 100;

export interface IUserDocument extends mongoose.Document {
	email: string;
	hash: string;
	salt: string;
	firstName: string;
	lastName: string;
	avatar?: string;
	title?: string;
	description?: string;
	google?: string;
	twitter?: string;
	facebook?: string;
	notifications?: [
		{
			notification: INotificationDocument | mongoose.Schema.Types.ObjectId;
			markedAsRead: boolean;
			alerts: {
				noNotification: boolean;
				allNotification: boolean;
				highlights: boolean;
				fewerNotifications: boolean;
			};
		}
	];
	spaces?: [
		{
			space: ISpaceDocument | mongoose.Schema.Types.ObjectId;
			muted: boolean;
		}
	];
	knowsAbout?: [
		{
			topic: ITopicDocument | mongoose.Schema.Types.ObjectId;
			muted: boolean;
			bookmarked: boolean;
		}
	];
	thankedTopicLogs?: [
		{
			topicLog: ILogDocument | mongoose.Schema.Types.ObjectId;
			isThanked: boolean;
		}
	];
	credentials?: [
		{
			name: string;
			isDefault: boolean;
		}
	];
	questions?: [
		{
			question: IQuestionDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	answers?: [
		{
			answer: IAnswerDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	shares?: [
		{
			share: IShareDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	posts?: [
		{
			post: IPostDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	followers?: [
		{
			follower: IUserDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	following?: [
		{
			user: IUserDocument;
		}
	];
	edits?: [
		{
			edit: IEditDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	activities?: [
		{
			activity: IActivity | mongoose.Schema.Types.ObjectId;
		}
	];
	settings?: {
		setting: ISettingDocument | mongoose.Schema.Types.ObjectId;
	};
	updatedAt?: Date;
	createdAt?: Date;
}

export interface IUserModel extends mongoose.Model<IUserDocument> {
	getNewSaltAndHash(password: string): { salt: string; hash: string };
	isPasswordCorrect(
		email: string,
		password: string
	): Promise<[boolean, string, string, string, string]>;
	doesUserExists(email: string): Promise<boolean>;
	uploadedAvatar(...args: any[]): any;
}

const userSchema: mongoose.Schema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		hash: {
			type: String,
			required: true,
		},
		salt: {
			type: String,
			required: true,
		},

		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
		},
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		google: {
			type: String,
		},
		twitter: {
			type: String,
		},
		facebook: {
			type: String,
		},
		notifications: [
			{
				notification: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Notification',
				},
				markedAsRead: Boolean,
				alerts: {
					noNotification: Boolean,
					allNotification: Boolean,
					highlights: Boolean,
					fewerNotifications: Boolean,
				},
			},
		],
		spaces: [
			{
				space: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Space',
				},
				muted: Boolean,
			},
		],
		knowsAbout: [
			{
				topic: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Topic',
				},
				muted: Boolean,
				bookmarked: Boolean,
			},
		],
		thankedTopicLogs: [
			{
				topicLog: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'TopicLog',
				},
				isThanked: Boolean,
			},
		],
		credentials: [
			{
				name: String,
				isDefault: Boolean,
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
		answers: [
			{
				answer: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Answer',
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
		posts: [
			{
				post: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Post',
				},
			},
		],
		followers: [
			{
				follower: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		following: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		edits: [
			{
				edit: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Edit',
				},
			},
		],
		activities: [
			{
				activity: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Activity',
				},
			},
		],
		settings: {
			setting: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Setting',
			},
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

const storage: multer.StorageEngine = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, path.join(__dirname, '..', './uploads', './user', './avatars'));
	},
	filename(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

userSchema.statics.uploadedAvatar = multer({
	storage,
}).single('avatar');

userSchema.statics.doesUserExists = async function (email: string): Promise<boolean> {
	const _user = await this.findOne({ email });
	return !!_user;
};

userSchema.statics.isPasswordCorrect = async function (
	email: string,
	password: string
): Promise<[boolean, string, string, string, string]> {
	try {
		const _user = await this.findOne({ email });
		const hashInDB = _user.hash;
		const saltInDB = _user.salt;

		const newHash = crypto
			.pbkdf2Sync(
				password,
				saltInDB,
				saltHashIterations,
				hashKeyLength,
				passwordHashingAlgorithm
			)
			.toString(stringFormat);
		return hashInDB === newHash
			? [true, _user.firstName, _user.lastName, _user.email, _user.id]
			: [false, '', '', '', ''];
	} catch (error) {
		// tslint:disable-next-line:no-console
		console.log(chalk.redBright(error));
		return [false, '', '', '', ''];
	}
};

userSchema.statics.getNewSaltAndHash = (password: string): object => {
	const salt: string = crypto.randomBytes(randomBytesForPasswordSalt).toString('hex');
	const hash: string = crypto
		.pbkdf2Sync(password, salt, saltHashIterations, hashKeyLength, passwordHashingAlgorithm)
		.toString(stringFormat);
	return { salt, hash };
};

export default mongoose.model<IUserDocument, IUserModel>('User', userSchema);
