import mongoose from 'mongoose';
import { IUserDocument } from './user';
export interface IShareDocument extends mongoose.Document {
	sharableType: string;
	sharableId: mongoose.Schema.Types.ObjectId | IShareDocument;
	from: mongoose.Schema.Types.ObjectId | IUserDocument;
	to: {
		facebook: boolean;
		twitter: boolean;
		copyLink: boolean;
		embedAnswer: boolean;
	};
	updatedAt?: Date;
	createdAt?: Date;
}
const shareSchema = new mongoose.Schema(
	{
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
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);
export default mongoose.model<IShareDocument>('Share', shareSchema);
