import mongoose from 'mongoose';
import { IAnswerDocument } from './answer.js';
import { IQuestionDocument } from './question.js';
import { IUserDocument } from './user.js';

export interface IDraftDocument extends mongoose.Document {
	user: IUserDocument | mongoose.Schema.Types.ObjectId;
	answer: IAnswerDocument | mongoose.Schema.Types.ObjectId;
	question: IQuestionDocument | mongoose.Schema.Types.ObjectId;
	updatedAt?: Date;
	createdAt?: Date;
}

const draftSchema: mongoose.Schema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		answer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Answer',
		},
		question: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question',
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

export default mongoose.model<IDraftDocument>('Draft', draftSchema);
