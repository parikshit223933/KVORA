import mongoose from 'mongoose';
import { IUser } from './user';
import { IQuestion } from './question';
import { ISpace } from './space';
import { IAnswer } from './answer';

export interface INotification extends mongoose.Document {
	user: mongoose.Schema.Types.ObjectId | IUser;
	description: string;
	associatedQuestion: mongoose.Schema.Types.ObjectId | IQuestion;
	associatedSpace: mongoose.Schema.Types.ObjectId | ISpace;
	associatedAnswer: mongoose.Schema.Types.ObjectId | IAnswer;
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
export default mongoose.model<INotification>('Notification', notificationSchema);
