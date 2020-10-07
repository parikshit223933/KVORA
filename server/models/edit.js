const mongoose = require('mongoose');

const editSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	previousValue: {
		type: String,
		required: true,
	},
	newValue: {
		type: String,
		required: true,
	},
});

const edit = mongoose.model('Edit', editSchema);
module.exports = edit;
