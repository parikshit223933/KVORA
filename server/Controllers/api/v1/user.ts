import UtilsClass from '../../../utility/utils.js';
const util = new UtilsClass();
import StatusCodes from 'http-status-codes';
import User from '../../../models/user.js';
import chalk from 'chalk';
import jwt from 'jsonwebtoken';
import base64url from 'base64url';
const passportJWTSecret = 'Secret_123';
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

	if (await User.doesUserExists(email)) {
		return util.response(res, StatusCodes.PRECONDITION_FAILED, 'User already exists!', false);
	}

	const { salt, hash } = User.getNewSaltAndHash(password);
	try {
		const user = await User.create({
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
			passportJWTSecret,
			{expiresIn:1000*60*60*24}
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
		return util.response(res);
	}
};

// req.body => {email, password}
export const signIn = async (req: express.Request, res: express.Response) => {
	const email: string = req.body.email;
	const password: string = req.body.password;

	if (!email || !password) {
		return util.response(res, StatusCodes.FORBIDDEN, 'One of the fields is empty', false);
	}

	const correctnessArray: [
		boolean,
		string,
		string,
		string,
		string
	] = await User.isPasswordCorrect(email, password);

	const existsInDB: boolean = correctnessArray[0];
	const firstNameOfUserInDB: string = correctnessArray[1];
	const lastNameOfUserInDB: string = correctnessArray[2];
	const userEmailInDB: string = correctnessArray[3];
	const userIdInDB: string = correctnessArray[4];

	if (!existsInDB) {
		return util.response(res, StatusCodes.FORBIDDEN, 'Wrong email/password', false);
	}

	const token = jwt.sign(
		{
			firstName: firstNameOfUserInDB,
			lastName: lastNameOfUserInDB,
			email: userEmailInDB,
			id: userIdInDB,
		},
		passportJWTSecret,
		{expiresIn:1000*60*60*24}
	);

	return util.response(res, StatusCodes.OK, 'Account created successfully!', true, {
		token,
		user: {
			firstName: firstNameOfUserInDB,
			lastName: lastNameOfUserInDB,
			email: userEmailInDB,
		},
	});
};

// req.body => {email, userId}
export const refreshAuth = async (req: express.Request, res: express.Response) => {
	const userId = req.body.userId;
	const email = req.body.email;
	const user = await User.findById(userId);
	if(!email||user.email!==email)
	{
		return util.response(res, StatusCodes.FORBIDDEN, 'Something went wrong!', false);
	}
	return util.response(res, StatusCodes.OK, 'Authenticated Successfully!', true, {
		user: {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
		},
	})
};
