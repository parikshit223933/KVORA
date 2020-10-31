import mongoose from 'mongoose';
const logSchema = new mongoose.Schema({
    typeOfAction: {
        type: String,
        required: true,
    },
    actionTakenBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    description: {
        type: String,
        required: true,
    },
    thanks: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
}, {
    timestamps: true,
    validateBeforeSave: true,
});
export default mongoose.model('Log', logSchema);
//# sourceMappingURL=log.js.map