const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

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
		cb(
			null,
			path.join(__dirname, '..', './uploads', './user', './avatars')
		);
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

userSchema.statics.uploadedAvatar = multer({
	storage: storage,
}).single('avatar');

const user = mongoose.model('User', userSchema);
module.exports = user;
