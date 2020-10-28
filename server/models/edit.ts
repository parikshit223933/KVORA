import mongoose from 'mongoose';

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

export interface Edit{
	type: string,
	previousValue: string,
	newValue: string,
}

export default mongoose.model<mongoose.Document>('Edit', editSchema);
