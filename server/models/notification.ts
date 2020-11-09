import mongoose from 'mongoose';
import { IUserDocument } from './user';
import { IQuestionDocument } from './question';
import { ISpaceDocument } from './space';
import { IAnswerDocument } from './answer';

export interface INotificationDocument extends mongoose.Document {
	user: mongoose.Schema.Types.ObjectId | IUserDocument;
	description: string;
	associatedQuestion: mongoose.Schema.Types.ObjectId | IQuestionDocument;
	associatedSpace?: mongoose.Schema.Types.ObjectId | ISpaceDocument;
	associatedAnswer?: mongoose.Schema.Types.ObjectId | IAnswerDocument;
	updatedAt?: Date;
	createdAt?: Date;
}

const notificationSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		description: {
			type: String,
		},
		associatedQuestion: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question',
		},
		associatedSpace: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Space',
		},
		associatedAnswer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Answer',
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);
export default mongoose.model<INotificationDocument>('Notification', notificationSchema);
