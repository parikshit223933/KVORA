const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');

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
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		admins: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		contributors: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		kvoraId: {
			type: String,
		},
		posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Post',
			},
		],
		questions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Question',
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

let storage = multer.diskStorage({
	destination (req, file, cb) {
		cb(
			null,
			path.join(__dirname, '..', './uploads', './spaces', './avatars')
		);
	},
	filename (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

spaceSchema.statics.uploadedAvatar = multer({
	storage,
}).single('avatar');

const space = mongoose.model('Space', spaceSchema);
module.exports = space;
