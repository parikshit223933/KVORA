import mongoose from 'mongoose';

export interface IEdit extends mongoose.Document {
	type: string;
	previousValue: string;
	newValue: string;
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

export default mongoose.model<IEdit>('Edit', editSchema);
