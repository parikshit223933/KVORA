import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import chalk from 'chalk';
import crypto from 'crypto';
const passwordHashingAlgorithm = 'sha512';
const stringFormat = 'hex';
const randomBytesForPasswordSalt = 50;
const saltHashIterations = 5000;
const hashKeyLength = 100;
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hash: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    google: {
        type: String,
    },
    twitter: {
        type: String,
    },
    facebook: {
        type: String,
    },
    notifications: [
        {
            notification: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Notification',
            },
            markedAsRead: Boolean,
            alerts: {
                noNotification: Boolean,
                allNotification: Boolean,
                highlights: Boolean,
                fewerNotifications: Boolean,
            },
        },
    ],
    spaces: [
        {
            space: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Space',
            },
            muted: Boolean,
        },
    ],
    knowsAbout: [
        {
            topic: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Topic',
            },
            muted: Boolean,
            bookmarked: Boolean,
        },
    ],
    thankedTopicLogs: [
        {
            topicLog: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'TopicLog',
            },
            isThanked: Boolean,
        },
    ],
    credentials: [
        {
            name: String,
            isDefault: Boolean,
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
    answers: [
        {
            answer: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Answer',
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
    posts: [
        {
            post: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post',
            },
        },
    ],
    followers: [
        {
            follower: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    following: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    edits: [
        {
            edit: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Edit',
            },
        },
    ],
    activities: [
        {
            activity: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Activity',
            },
        },
    ],
    settings: {
        setting: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Setting',
        },
    },
}, {
    timestamps: true,
    validateBeforeSave: true,
});
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(__dirname, '..', './uploads', './user', './avatars'));
    },
    filename(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    },
});
userSchema.statics.uploadedAvatar = multer({
    storage,
}).single('avatar');
userSchema.statics.doesUserExists = async function (email) {
    const _user = await this.findOne({ email });
    return !!_user;
};
userSchema.statics.isPasswordCorrect = async function (email, password) {
    try {
        const _user = await this.findOne({ email });
        const hashInDB = _user.hash;
        const saltInDB = _user.salt;
        const newHash = crypto
            .pbkdf2Sync(password, saltInDB, saltHashIterations, hashKeyLength, passwordHashingAlgorithm)
            .toString(stringFormat);
        return hashInDB === newHash;
    }
    catch (error) {
        // tslint:disable-next-line:no-console
        console.log(chalk.redBright(error));
    }
};
userSchema.statics.getNewSaltAndHash = (password) => {
    const salt = crypto.randomBytes(randomBytesForPasswordSalt).toString('hex');
    const hash = crypto
        .pbkdf2Sync(password, salt, saltHashIterations, hashKeyLength, passwordHashingAlgorithm)
        .toString(stringFormat);
    return { salt, hash };
};
export default mongoose.model('User', userSchema);
//# sourceMappingURL=user.js.map