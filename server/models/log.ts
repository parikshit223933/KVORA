import { User } from './user';
import mongoose from 'mongoose';

const logSchema = new mongoose.Schema(
	{
		typeOfAction: {
			type: String, // merged or unmerged.
			required: true,
		},
		actionTakenBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
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
export interface Log extends mongoose.Document
{
	typeOfAction: string;
	actionTakenBy: mongoose.Types.ObjectId | User | string;
	description: string;
	thanks:mongoose.Types.ObjectId | User | string
}
export interface LogPopulated extends Log
{
	actionTakenBy: User;
	thanks:User;
}
const log = mongoose.model<Log|LogPopulated>('Log', logSchema);
module.exports = log;
