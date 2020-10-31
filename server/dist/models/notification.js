import mongoose from 'mongoose';
const notificationSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
    validateBeforeSave: true,
});
export default mongoose.model('Notification', notificationSchema);
//# sourceMappingURL=notification.js.map