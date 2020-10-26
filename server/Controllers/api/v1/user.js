const utils = new (require('../../../utility/utils'))();
const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const User = require('../../../models/user');
const chalk = require('chalk');
const jwt = require('jsonwebtoken');
const passportJWTSecret = 'secret';

// Input: formData {firstName, lastName, email, password}
module.exports.signUp = async (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const password = req.body.password;

	if (utils.isNullOrUndefined([firstName, lastName, email, password])) {
		return utils.response(res, StatusCodes.NOT_FOUND, 'Please fill in all fields', false);
	}

	if (await User.doesUserExists(email)) {
		return utils.response(res, StatusCodes.PRECONDITION_FAILED, 'User already exists!', false);
	}

	const { salt, hash } =await User.getNewSaltAndHash(password);
	try {
		let user = await User.create({
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
		return utils.response(res, StatusCodes.OK, 'Account created successfully!', true, {
			token,
			user: {
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
			},
		});
	} catch (error) {
		console.log(chalk.redBright(error));
		return utils.response(
			res,
			StatusCodes.INTERNAL_SERVER_ERROR,
			getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			false
		);
	}
};
