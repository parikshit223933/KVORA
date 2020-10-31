import mongoose from 'mongoose';
const editSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
    validateBeforeSave: true,
});
export default mongoose.model('Edit', editSchema);
//# sourceMappingURL=edit.js.map