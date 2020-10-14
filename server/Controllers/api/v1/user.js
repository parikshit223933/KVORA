const userUtility = new (require('../../../utility/userUtility'))();
const generalUtility = new (require('../../../utility/generalUtility'))();
const { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode } = require('http-status-codes');
const User = require('../../../models/user');
const randomBytesForPasswordSalt = 50;
const saltHashIterations = 5000;
const hashKeyLength = 100;
const crypto = require('crypto');
const chalk = require('chalk');
const passwordHashingAlgorithm = 'sha512';
const stringFormat = 'hex';

// Input: formData {firstName, lastName, email, password}
module.exports.signUp = async (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const password = req.body.password;

	if (generalUtility.isNullOrUndefined([firstName, lastName, email, password])) {
		return generalUtility.response(
			res,
			StatusCodes.NOT_FOUND,
			'Please fill in all fields',
			false
		);
	}

	if (userUtility.doesUserExists(email)) {
		return generalUtility.response(
			res,
			StatusCodes.PRECONDITION_FAILED,
			'User already exists!',
			false
		);
	}

	const salt = crypto.randomBytes(randomBytesForPasswordSalt).toString('hex');
	const hash = crypto
		.pbkdf2Sync(password, salt, saltHashIterations, hashKeyLength, passwordHashingAlgorithm)
		.toString(stringFormat);
	try {
		let user = await User.create({
			firstName,
			lastName,
			hash,
			salt,
			email,
		});
		await user.save();
	} catch (error) {
		console.log(chalk.redBright(error));
		return generalUtility.response(
			res,
			StatusCodes.INTERNAL_SERVER_ERROR,
			getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			false
		);
	}

	return generalUtility.response(res, StatusCodes.OK, 'Account created successfully!', true);
};
