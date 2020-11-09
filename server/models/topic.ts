import mongoose from 'mongoose';
import { IUserDocument } from './user';
import { IQuestionDocument } from './question';
import { IPostDocument } from './post';
import { ILogDocument } from './log';

export interface ITopicDocument extends mongoose.Document {
	name: string;
	posts: [
		{
			post: IPostDocument;
		}
	];
	questions: [
		{
			question: IQuestionDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	related: [
		{
			related: ITopicDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	mostViewedWriters: [
		{
			user: IUserDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	followers: [
		{
			user: IUserDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	manage: {
		ontology: {
			parentTopics: [
				{
					topic: ITopicDocument | mongoose.Schema.Types.ObjectId;
				}
			];
			childTopics: [
				{
					topic: ITopicDocument | mongoose.Schema.Types.ObjectId;
				}
			];
		};
		aliases: [
			{
				alias: string;
			}
		];
		mergedTopics: [
			{
				topic: ITopicDocument | mongoose.Schema.Types.ObjectId;
			}
		];
		settings: {
			isLocked: boolean;
			onKvora: {
				typeOfQuestion: boolean;
				grammaticalStructureOfQuestion: boolean;
				organiseOtherTopics: boolean;
				isAdultTopic: boolean;
			};
			asConcept: {
				isUniversalAbstractConcept: boolean;
				exampleOfConcept: boolean;
				isNamedEntity: boolean;
			};
			asRelatesToPlace: {
				isLocation: boolean;
				canBeLocalized: boolean;
				localizedFormOfGeneralTopic: boolean;
			};
			asEvent: {
				isEvent: boolean;
				isRecruitingEvent: boolean;
			};
			toDescribeType: {
				isAcademicFieldOrSubject: boolean;
				isJobProfessionCareer: boolean;
				isAboutActivity: boolean;
				isPerson: boolean;
				associatedWithSpecificProfile: boolean;
				isCompanyOrganization: boolean;
				isSpecificSchool: boolean;
				isProductService: boolean;
			};
		};
	};
	logs: [
		{
			log: ILogDocument | mongoose.Schema.Types.ObjectId;
		}
	];
	updatedAt?: Date;
	createdAt?: Date;
}

const TopicSchema = new mongoose.Schema(
	{
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
						type: String,
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
					ref: 'Log',
				},
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

export default mongoose.model<ITopicDocument>('Topic', TopicSchema);
