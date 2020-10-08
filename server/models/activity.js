const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema(
	{
		Type: {
			type: String,
		},
		title: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

const activity = mongoose.model('Activity', activitySchema);
module.exports = activity;
