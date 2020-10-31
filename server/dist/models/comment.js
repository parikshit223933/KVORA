import mongoose from 'mongoose';
const commnetSchema = new mongoose.Schema({
    isRootComment: {
        type: Boolean,
        required: true,
        default: false,
    },
    content: {
        type: String,
        required: true,
    },
    upvotes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    downvotes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    reports: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },
    directChildren: [
        {
            comment: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment',
            },
        },
    ],
}, {
    timestamps: true,
    validateBeforeSave: true,
});
export default mongoose.model('Comment', commnetSchema);
//# sourceMappingURL=comment.js.map