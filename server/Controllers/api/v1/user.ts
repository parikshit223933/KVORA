import UtilsClass from '../../../utility/utils.js';
const util = new UtilsClass();
import StatusCodes from 'http-status-codes';
import getReasonPhrase from 'http-status-codes'
import UserModel, { IUser } from '../../../models/user.js';
import chalk from 'chalk';
import jwt from 'jsonwebtoken';
const passportJWTSecret = 'secret';
import express from 'express';

// Input: formData {firstName, lastName, email, password}
export const signUp = async (req: express.Request, res: express.Response) => {
	const firstName: string = req.body.firstName;
	const lastName: string = req.body.lastName;
	const email: string = req.body.email;
	const password: string = req.body.password;

	if (util.isNullOrUndefined([firstName, lastName, email, password])) {
		return util.response(res, StatusCodes.NOT_FOUND, 'Please fill in all fields', false);
	}

	const User = new UserModel();

	if (await User.doesUserExists(email)) {
		return util.response(res, StatusCodes.PRECONDITION_FAILED, 'User already exists!', false);
	}

	const { salt, hash } = await User.getNewSaltAndHash(password);
	try {
		const user = await UserModel.create({
			firstName,
			lastName,
			hash,
			salt,
			email,
		});
		await user.save();
		const token = jwt.sign(
			{
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				id: user.id,
			},
			passportJWTSecret
		);
		return util.response(res, StatusCodes.OK, 'Account created successfully!', true, {
			token,
			user: {
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
			},
		});
	} catch (error) {
		// tslint:disable-next-line:no-console
		console.log(chalk.redBright(error));
		return util.response(
			res,
		);
	}
};
