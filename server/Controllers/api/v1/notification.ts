import express from 'express';
import UtilClass from '../../../utility/utils.js';
import StatusCodes from 'http-status-codes';
const util = new UtilClass();
import Notification from '../../../models/notification.js';
import { IQuestionDocument } from '../../../models/question.js';

export const getAllNotifications = async (req: express.Request, res: express.Response) => {
	const userIdInRequest: any = req.user;
	try {
		const allUserNotifications = await Notification.find({
			user: userIdInRequest._id,
		}).populate({ path: 'associatedQuestion' });
		return util.response(res, StatusCodes.OK, 'User Notifications', true, {
			notifications: allUserNotifications.map((notif) => {
				return {
					notificationId: notif.id,
					description: notif.description,
					associatedQuestion: notif.associatedQuestion,
					updatedAt: (notif as any).updatedAt,
					createdAt: (notif as any).createdAt,
				};
			}),
		});
	} catch (error) {
		// tslint:disable-next-line: no-console
		console.log(error);
		return util.response(res);
	}
};
