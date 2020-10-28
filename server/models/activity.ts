import mongoose from 'mongoose';

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
export interface Activity {
	type:string,
	title:string,
	description:string
}
export default mongoose.model< mongoose.Document >('Activity', activitySchema);

