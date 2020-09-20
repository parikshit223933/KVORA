const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
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
});

const space = mongoose.model('Space', spaceSchema);
module.exports = space;
