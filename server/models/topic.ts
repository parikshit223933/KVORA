const mongoose = require('mongoose');

const TopicSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Post',
			},
		],
		questions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Question',
			},
		],
		related: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Topic',
			},
		],
		mostViewedWriters: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		manage: {
			ontology: {
				parentTopics: [
					{
						type: mongoose.Schema.Types.ObjectId,
						ref: 'Topic',
					},
				],
				childTopics: [
					{
						type: mongoose.Schema.Types.ObjectId,
						ref: 'Topic',
					},
				],
			},
			aliases: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'String',
				},
			],
			mergedTopics: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Topic',
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
				type: mongoose.Schema.Types.ObjectId,
				ref: 'TopicLog',
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

const topic = mongoose.model('Topic', TopicSchema);
module.exports = topic;
