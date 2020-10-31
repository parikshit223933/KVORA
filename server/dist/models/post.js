import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    type: {
        type: String,
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer',
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    thanks: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    upvotes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    shares: [
        {
            share: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Share',
            },
        },
    ],
    comments: [
        {
            comment: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment',
            },
        },
    ],
    associatedSpaces: [
        {
            space: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Space',
            },
        },
    ],
}, {
    timestamps: true,
    validateBeforeSave: true,
});
export default mongoose.model('Post', postSchema);
//# sourceMappingURL=post.js.map