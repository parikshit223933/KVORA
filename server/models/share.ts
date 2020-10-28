const mongoose = require('mongoose');

const shareSchema = new mongoose.Schema({
	sharableType: {
		type: String,
	},
	sharableId: {
		type: mongoose.Schema.Types.ObjectId,
	},
	from: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	to: {
		facebook: {
			type: Boolean,
		},
		twitter: {
			type: Boolean,
		},
		copyLink: {
			type: Boolean,
		},
		embedAnswer: {
			type: Boolean,
		},
	},
});
const share = mongoose.model('Share', shareSchema);
module.exports = share;
