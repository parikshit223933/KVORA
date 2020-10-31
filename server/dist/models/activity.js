import mongoose from 'mongoose';
const activitySchema = new mongoose.Schema({
    type: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
}, {
    timestamps: true,
    validateBeforeSave: true,
});
export default mongoose.model('Activity', activitySchema);
//# sourceMappingURL=activity.js.map