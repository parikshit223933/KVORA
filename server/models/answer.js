const mongoose = require('mongoose');

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

const answer = mongoose.model('Answer', answerSchema);
module.exports = answer;
