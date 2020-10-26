const utils = new (require('../../../utility/utils'))();
const { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode } = require('http-status-codes');
const User = require('../../../models/user');
const chalk = require('chalk');

// Input: formData {firstName, lastName, email, password}
module.exports.signUp = async (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const password = req.body.password;

	if (utils.isNullOrUndefined([firstName, lastName, email, password])) {
		return utils.response(res, StatusCodes.NOT_FOUND, 'Please fill in all fields', false);
	}

	if (User.doesUserExists(email)) {
		return utils.response(res, StatusCodes.PRECONDITION_FAILED, 'User already exists!', false);
	}

	const { salt, hash } = User.getNewSaltAndHash(password);
	try {
		let user = await User.create({
			firstName,
			lastName,
			hash,
			salt,
			email,
		});
		await user.save();
		return utils.response(res, StatusCodes.OK, 'Account created successfully!', true, {
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
