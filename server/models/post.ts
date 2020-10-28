const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		type: {
			type: String,
		},
		question: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question',
		},
		answer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Answer',
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		thanks: [
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
		shares: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Share',
			},
		],
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
		associatedSpaces: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Space',
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

const post = mongoose.model('Post', postSchema);
module.exports = post;
