import mongoose from 'mongoose';
const TopicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    related: [
        {
            related: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Topic',
            },
        },
    ],
    mostViewedWriters: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
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
    manage: {
        ontology: {
            parentTopics: [
                {
                    topic: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Topic',
                    },
                },
            ],
            childTopics: [
                {
                    topic: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Topic',
                    },
                },
            ],
        },
        aliases: [
            {
                alias: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'String',
                },
            },
        ],
        mergedTopics: [
            {
                topic: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Topic',
                },
            },
        ],
        settings: {
            isLocked: Boolean,
            onkvora: {
                typeOfQuestion: Boolean,
                grammaticalStructureOfQuestion: Boolean,
                organiseOtherTopics: Boolean,
                isAdultTopic: Boolean,
            },
            asConcept: {
                isUniversalAbstractConcept: Boolean,
                exampleOfConcept: Boolean,
                isNamedEntity: Boolean,
            },
            asRelatesToPlace: {
                isLocation: Boolean,
                canBeLocalized: Boolean,
                localizedFormOfGeneralTopic: Boolean,
            },
            asEvent: {
                isEvent: Boolean,
                isrecruitingEvent: Boolean,
            },
            toDescribeType: {
                isAcademicFieldOrSubject: Boolean,
                isJobProfessionCareer: Boolean,
                isAboutActivity: Boolean,
                isPerson: Boolean,
                associatedWithSpecificProfile: Boolean,
                isCompanyOrganization: Boolean,
                isSpecificSchool: Boolean,
                isProductService: Boolean,
            },
        },
    },
    logs: [
        {
            log: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'TopicLog',
            },
        },
    ],
}, {
    timestamps: true,
    validateBeforeSave: true,
});
export default mongoose.model('Topic', TopicSchema);
//# sourceMappingURL=topic.js.map