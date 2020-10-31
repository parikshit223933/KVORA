import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import chalk from 'chalk';
import crypto from 'crypto';
import { INotification } from './notification';
import { ISpace } from './space';
import { ITopic } from './topic';
import { ILog } from './log';
import { IQuestion } from './question';
import { IAnswer } from './answer';
import { IShare } from './share';
import { IPost } from './post';
import { IEdit } from './edit';
import { IActivity } from './activity';
import { ISetting } from './setting';
const passwordHashingAlgorithm = 'sha512';
const stringFormat = 'hex';
const randomBytesForPasswordSalt = 50;
const saltHashIterations = 5000;
const hashKeyLength = 100;

export interface IUser extends mongoose.Document {
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
			notification: INotification | mongoose.Schema.Types.ObjectId;
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
			space: ISpace | mongoose.Schema.Types.ObjectId;
			muted: boolean;
		}
	];
	knowsAbout?: [
		{
			topic: ITopic | mongoose.Schema.Types.ObjectId;
			muted: boolean;
			bookmarked: boolean;
		}
	];
	thankedTopicLogs?: [
		{
			topicLog: ILog | mongoose.Schema.Types.ObjectId;
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
			question: IQuestion | mongoose.Schema.Types.ObjectId;
		}
	];
	answers?: [
		{
			answer: IAnswer | mongoose.Schema.Types.ObjectId;
		}
	];
	shares?: [
		{
			share: IShare | mongoose.Schema.Types.ObjectId;
		}
	];
	posts?: [
		{
			post: IPost | mongoose.Schema.Types.ObjectId;
		}
	];
	followers?: [
		{
			follower: IUser | mongoose.Schema.Types.ObjectId;
		}
	];
	following?: [
		{
			user: IUser;
		}
	];
	edits?: [
		{
			edit: IEdit | mongoose.Schema.Types.ObjectId;
		}
	];
	activities?: [
		{
			activity: IActivity | mongoose.Schema.Types.ObjectId;
		}
	];
	settings?: {
		setting: ISetting | mongoose.Schema.Types.ObjectId;
	};
	getNewSaltAndHash(password: string): {salt:string, hash:string};
	isPasswordCorrect(email: string, password: string): Promise<boolean>;
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
): Promise<boolean> {
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
		return hashInDB === newHash;
	} catch (error) {
		// tslint:disable-next-line:no-console
		console.log(chalk.redBright(error));
	}
};

userSchema.statics.getNewSaltAndHash = (password: string): object => {
	const salt: string = crypto.randomBytes(randomBytesForPasswordSalt).toString('hex');
	const hash: string = crypto
		.pbkdf2Sync(password, salt, saltHashIterations, hashKeyLength, passwordHashingAlgorithm)
		.toString(stringFormat);
	return { salt, hash };
};

export default mongoose.model<IUser>('User', userSchema);
