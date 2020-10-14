const User = require('../models/user');
const crypto = require('crypto');
const chalk = require('chalk');
const passwordHashingAlgorithm = 'sha512';
const stringFormat = 'hex';
const randomBytesForPasswordSalt = 50;
const saltHashIterations = 5000;
const hashKeyLength = 100;
const crypto = require('crypto');

class userUtility {
	doesUserExists = async (email) => {
		let user = await User.findOne({ email });
		if (user) {
			return true;
		}
		return false;
	};

	isPasswordCorrect = async (
		email,
		password,
		saltHashIterations,
		hashKeyLength,
		passwordHashingAlgorithm,
		stringFormat
	) => {
		try {
			let user = await User.findOne({ email });
			const hashInDB = user.hash;
			const saltinDB = user.salt;

			const newHash = crypto
				.pbkdf2Sync(
					password,
					saltinDB,
					saltHashIterations,
					hashKeyLength,
					passwordHashingAlgorithm
				)
				.toString(stringFormat);
			return hashInDB === newHash;
		} catch (error) {
			console.log(chalk.redBright(error));
			return;
		}
	};

	getNewSaltAndHash = (password) => {
		const salt = crypto.randomBytes(randomBytesForPasswordSalt).toString('hex');
		const hash = crypto
			.pbkdf2Sync(password, salt, saltHashIterations, hashKeyLength, passwordHashingAlgorithm)
			.toString(stringFormat);
		return { salt, hash };
	};
}

module.exports = userUtility;
