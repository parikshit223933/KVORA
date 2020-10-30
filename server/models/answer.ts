import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';

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
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		upvotes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		downvotes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		shares: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

const storage = multer.diskStorage({
	destination (req, file, cb) {
		cb(
			null,
			path.join(__dirname, '..', './uploads', './answers', './images')
		);
	},
	filename (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

answerSchema.statics.uploadedAvatar = multer({
	storage,
}).single('image');

const answer = mongoose.model('Answer', answerSchema);
module.exports = answer;
