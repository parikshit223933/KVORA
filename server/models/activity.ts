import mongoose from 'mongoose';

export interface IActivity extends mongoose.Document {
	type: string;
	title: string;
	description: string;
}

const activitySchema = new mongoose.Schema(
	{
		type: {
			type: String,
		},
		title: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

export default mongoose.model<IActivity>('Activity', activitySchema);
