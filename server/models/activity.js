const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
	Type: {
		type: String,
	},
	title: {
		type: String,
	},
	description: {
		type: String,
	},
});

const activity = mongoose.model('Activity', activitySchema);
module.exports = activity;