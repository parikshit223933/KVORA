const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		contextLink: {
			type: String,
		},
		isPublic: {
			type: Boolean,
			default: false,
		},
		isAnonymous: {
			type: Boolean,
			default: false,
		},
		isLimited: {
			type: Boolean,
			default: false,
		},
		isAQuestion: {
			type: Boolean,
		},
		isASharedLink: {
			type: Boolean,
		},
		linkDescription: {
			type: String,
			maxlength: 250,
		},
		associatedSpace: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Space',
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

const question = mongoose.model('Question', questionSchema);
module.exports = question;
