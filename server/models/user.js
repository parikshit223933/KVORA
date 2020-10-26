const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const chalk = require('chalk');
const passwordHashingAlgorithm = 'sha512';
const stringFormat = 'hex';
const randomBytesForPasswordSalt = 50;
const saltHashIterations = 5000;
const hashKeyLength = 100;
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
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
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Space',
				muted: Boolean,
			},
		],
		knowsAbout: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Topic',
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
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Question',
			},
		],
		answers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Answer',
			},
		],
		shares: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Share',
			},
		],
		posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Post',
			},
		],
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		edits: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Edit',
			},
		],
		activity: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Activity',
			},
		],
		settings: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Setting',
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '..', './uploads', './user', './avatars'));
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

userSchema.statics.uploadedAvatar = multer({
	storage: storage,
}).single('avatar');


userSchema.statics.doesUserExists = async function (email) {
	let user = await this.findOne({ email });
	if (user) {
		return true;
	}
	return false;
};

userSchema.statics.isPasswordCorrect = async function (email, password) {
	try {
		let user = await this.findOne({ email });
		const hashInDB = user.hash;
		const saltinDB = user.salt;

		const newHash = crypto
			.pbkdf2Sync(
				password,
				saltinDB,
				saltHashIterations,
				hashKeyLength,
				passwordHashingAlgorithm
			)
			.toString(stringFormat);
		return hashInDB === newHash;
	} catch (error) {
		console.log(chalk.redBright(error));
		return;
	}
};

userSchema.statics.getNewSaltAndHash = (password) => {
	const salt = crypto.randomBytes(randomBytesForPasswordSalt).toString('hex');
	const hash = crypto
		.pbkdf2Sync(password, salt, saltHashIterations, hashKeyLength, passwordHashingAlgorithm)
		.toString(stringFormat);
	return { salt, hash };
};

const user = mongoose.model('User', userSchema);
module.exports = user;
