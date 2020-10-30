const util = new (require('../../../utility/utils'))();
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import User from '../../../models/user';
import chalk from 'chalk';
import jwt from 'jsonwebtoken';
const passportJWTSecret = 'secret';
import express from 'express';

// Input: formData {firstName, lastName, email, password}
module.exports.signUp = async (req:express.Request, res:express.Response) => {
	const firstName:string = req.body.firstName;
	const lastName:string = req.body.lastName;
	const email:string = req.body.email;
	const password:string = req.body.password;

	if (util.isNullOrUndefined([firstName, lastName, email, password])) {
		return util.response(res, StatusCodes.NOT_FOUND, 'Please fill in all fields', false);
	}

	if (await User.doesUserExists(email)) {
		return util.response(res, StatusCodes.PRECONDITION_FAILED, 'User already exists!', false);
	}

	const { salt, hash } =await User.getNewSaltAndHash(password);
	try {
		const user = await User.create({
			firstName,
			lastName,
			hash,
			salt,
			email,
		});
		await user.save();
		const token = jwt.sign({
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			id: user.id,
		}, passportJWTSecret);
		return util.response(res, StatusCodes.OK, 'Account created successfully!', true, {
			token,
			user: {
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
			},
		});
	} catch (error) {
		console.log(chalk.redBright(error));
		return util.response(
			res,
			StatusCodes.INTERNAL_SERVER_ERROR,
			getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			false
		);
	}
};
