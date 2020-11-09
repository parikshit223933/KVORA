import { IUserDocument } from './user';
import mongoose from 'mongoose';

export interface ILogDocument extends mongoose.Document {
	typeOfAction: string;
	actionTakenBy: mongoose.Schema.Types.ObjectId | IUserDocument;
	description: string;
	thanks: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	updatedAt?: Date;
	createdAt?: Date;
}

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
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

export default mongoose.model<ILogDocument>('Log', logSchema);
