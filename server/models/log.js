const mongoose = require('mongoose');

const logSchema = new mongoose.Schema(
	{
		typeOfAction: {
			type: String, // merged or unmerged.
			required: true,
		},
		actionTakenBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
		},
		description: {
			type: String,
			required: true,
		},
		thanks: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);
const log = mongoose.model('Log', logSchema);
module.exports = log;
