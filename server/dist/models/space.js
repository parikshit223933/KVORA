import mongoose from 'mongoose';
import path from 'path';
import multer from 'multer';
const spaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
    },
    avatar: {
        type: String,
    },
    about: {
        type: String,
    },
    details: {
        type: String,
    },
    followers: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    admins: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    contributors: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    kvoraId: {
        type: String,
    },
    posts: [
        {
            post: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post',
            },
        },
    ],
    questions: [
        {
            question: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Question',
            },
        },
    ],
}, {
    timestamps: true,
    validateBeforeSave: true,
});
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(__dirname, '..', './uploads', './spaces', './avatars'));
    },
    filename(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    },
});
spaceSchema.statics.uploadedAvatar = multer({
    storage,
}).single('avatar');
export default mongoose.model('Space', spaceSchema);
//# sourceMappingURL=space.js.map