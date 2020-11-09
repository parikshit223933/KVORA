import mongoose from 'mongoose';
import { IUserDocument } from './user';
import { ISpaceDocument } from './space';

export interface ISettingDocument extends mongoose.Document {
	user: mongoose.Schema.Types.ObjectId | IUserDocument;
	// PRIVACY SETTINGS ******************************************************
	allow_seaarch_engines_to_index_name: boolean;
	allow_adult_content_in_feed: boolean;
	// Inbox preferences
	recieve_messages_from: number;
	// Comment preferences\
	allow_others_to_comment: boolean;
	// Translation preferences
	allow_translation_by_others: boolean;
	// Content preferences
	allow_gif_autoplay: boolean;
	allow_advertisers_to_promote_answers: boolean;
	// Delete or deactivate your account
	deactivated_in_all_languages: boolean;
	account_deleted: boolean;
	// EMAIL AND NOTIFICATION SETTINGS ****************************************
	// general questions and answers
	new_answers: boolean;
	requests: boolean;
	session_answers: boolean;
	// messages, comments and mentions
	messages: boolean;
	comments_and_replies: boolean;
	mentions: boolean;
	// spaces
	space_invites: boolean;
	unloked_features: boolean;
	spaces_you_follow: [
		{
			space: mongoose.Schema.Types.ObjectId | ISpaceDocument;
			alert_type: number;
		}
	];
	// you and your network
	new_followers: boolean;
	your_subscriptions: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
		}
	];
	people_you_follow: [
		{
			user: mongoose.Schema.Types.ObjectId | IUserDocument;
			is_subscribed: boolean;
		}
	];
	// upvotes
	upvotes: boolean;
	// shares
	shares_of_my_content: boolean;
	// moderation
	my_answers: boolean;
	// quora digest
	quora_digest: {
		digest: boolean;
		email_frequency: number;
	};
	// things you might like
	popular_answers: boolean;
	stories_based_on_my_activity: boolean;
	recommended_questions: boolean;
	// LANGUAGES **************************************************************
	languages: [
		{
			language: string;
			is_primary: boolean;
		}
	];
	updatedAt?: Date;
	createdAt?: Date;
}

const settingSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		// PRIVACY SETTINGS ******************************************************
		allow_seaarch_engines_to_index_name: {
			type: Boolean,
			default: true,
			required: true,
		},
		allow_adult_content_in_feed: {
			type: Boolean,
			default: true,
			required: true,
		},
		// Inbox preferences
		recieve_messages_from: {
			type: Number,
			min: 0,
			max: 2,
			default: 1,
			required: true,
		},
		// Comment preferences\
		allow_others_to_comment: {
			type: Boolean,
			default: true,
			required: true,
		},
		// Translation preferences
		allow_translation_by_others: {
			type: Boolean,
			default: true,
			required: true,
		},
		// Content preferences
		allow_gif_autoplay: {
			type: Boolean,
			default: true,
			required: true,
		},
		allow_advertisers_to_promote_answers: {
			type: Boolean,
			default: true,
			required: true,
		},
		// Delete or deactivate your account
		deactivated_in_all_languages: {
			type: Boolean,
			default: 1,
			required: false,
		},
		account_deleted: {
			type: Boolean,
			default: 1,
			required: false,
		},
		// EMAIL AND NOTIFICATION SETTINGS ****************************************
		// general questions and answers
		new_answers: {
			type: Boolean,
			required: true,
			default: true,
		},
		requests: {
			type: Boolean,
			required: true,
			default: true,
		},
		session_answers: {
			type: Boolean,
			required: true,
			default: true,
		},
		// messages, comments and mentions
		messages: {
			type: Boolean,
			required: true,
			default: true,
		},
		comments_and_replies: {
			type: Boolean,
			required: true,
			default: true,
		},
		mentions: {
			type: Boolean,
			required: true,
			default: true,
		},
		// spaces
		space_invites: {
			type: Boolean,
			required: true,
			default: true,
		},
		unloked_features: {
			type: Boolean,
			required: true,
			default: true,
		},
		spaces_you_follow: [
			{
				space: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Space',
				},
				alert_type: {
					type: Number,
					min: 0,
					max: 2,
					default: 1,
					required: true,
				},
			},
		],
		// you and your network
		new_followers: {
			type: Boolean,
			required: true,
			default: true,
		},
		your_subscriptions: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		people_you_follow: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
				is_subscribed: {
					type: Boolean,
					default: true,
					required: true,
				},
			},
		],
		// upvotes
		upvotes: {
			type: Boolean,
			required: true,
			default: true,
		},
		// shares
		shares_of_my_content: {
			type: Boolean,
			required: true,
			default: true,
		},
		// moderation
		my_answers: {
			type: Boolean,
			required: true,
			default: true,
		},
		// quora digest
		quora_digest: {
			digest: { type: Boolean, required: true, default: true },
			email_frequency: {
				type: Number,
				min: 0,
				max: 1,
				default: 0,
			},
		},
		// things you might like
		popular_answers: {
			type: Boolean,
			required: true,
			default: true,
		},
		stories_based_on_my_activity: {
			type: Boolean,
			required: true,
			default: true,
		},
		recommended_questions: {
			type: Boolean,
			required: true,
			default: false,
		},
		// LANGUAGES **************************************************************
		languages: [
			{
				language: { type: String },
				is_primary: {
					type: Boolean,
					default: false,
				},
			},
		],
	},
	{
		timestamps: true,
		validateBeforeSave: true,
	}
);

export default mongoose.model<ISettingDocument>('Setting', settingSchema);
