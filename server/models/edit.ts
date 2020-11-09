import mongoose from 'mongoose';

export interface IEditDocument extends mongoose.Document {
	type: string;
	previousValue: string;
	newValue: string;
	updatedAt?: Date;
	createdAt?: Date;
}

const editSchema = new mongoose.Schema(
	{
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
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

export default mongoose.model<IEditDocument>('Edit', editSchema);
