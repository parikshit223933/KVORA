const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
	},
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	google: {
		type: String,
	},
	twitter: {
		type: String,
	},
	facebook: {
		type: String,
	},
	spaces: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Space',
		},
	],
	knowsAbout: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Topic',
		},
	],
	credentials: [
		{
			name: String,
			isDefault: Boolean,
		},
	],
	questions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question',
		},
	],
	answers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Answer',
		},
	],
	shares: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Share',
		},
	],
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Post',
		},
	],
	followers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	following: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	edits: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Edit',
		},
	],
	activity: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Activity',
		},
    ],
    settings:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Setting'
    }
});
