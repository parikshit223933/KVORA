import mongoose from 'mongoose';
const questionSchema = new mongoose.Schema({
    author: {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    content: {
        type: String,
    },
    contextLink: {
        type: String,
    },
    answers: [
        {
            answer: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Answer',
            },
        },
    ],
    followers: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
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
    downvotes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    relatedTopics: [
        {
            topic: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Topic',
            },
        },
    ],
    isPublic: {
        type: Boolean,
        default: false,
    },
    isAnonymous: {
        type: Boolean,
        default: false,
    },
    isLimited: {
        type: Boolean,
        default: false,
    },
    isAQuestion: {
        type: Boolean,
    },
    isASharedLink: {
        type: Boolean,
    },
    linkDescription: {
        type: String,
        maxlength: 250,
    },
    associatedSpace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Space',
    },
}, {
    timestamps: true,
    validateBeforeSave: true,
});
export default mongoose.model('Question', questionSchema);
//# sourceMappingURL=question.js.map