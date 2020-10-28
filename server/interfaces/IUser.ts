import { RequestHandler } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

export default interface IUser {
	email: string;
	hash: string;
	salt: string;
	firstName: string;
	lastName: string;
	avatar: string;
	title: string;
	description: string;
	google: string;
	facebook: string;
	twitter: string;
	notifications: [
		{
			notification: any;
			markedAsRead: boolean;
			alerts: {
				noNotification: boolean;
				allNotification: boolean;
				highlights: boolean;
				fewerNotifications: boolean;
			};
		}
	];
	spaces: [
		{
			space: any;
			muted: boolean;
		}
	];
	knowsAbout: [
		{
			topic: any;
			muted: boolean;
			bookmarked: boolean;
		}
	];
	thankedTopicLogs: [
		{
			topicLog: any;
			isThanked: boolean;
		}
	];
	credentials: [
		{
			name: string;
			isDefault: boolean;
		}
	];
	questions: [
		{
			question: any;
		}
	];
	answers: [
		{
			answer: any;
		}
	];
	shares: [
		{
			share: any;
		}
	];
	posts: [
		{
			post: any;
		}
	];
	followers: [
		{
			follower: any;
		}
	];
	following: [
		{
			user: any;
		}
	];
	edits: [
		{
			edit: any;
		}
	];
	activities: [
		{
			activity: any;
		}
	];
	settings: {
		setting: any;
	};
	////////////////////////// STATICS
	uploadedAvatar: RequestHandler<ParamsDictionary, any, any, Query>;
	doesUserExists: Promise<boolean>;
	isPasswordCorrect: Promise<boolean>;
	getNewSaltAndHash: { salt: string; hash: string };
}
