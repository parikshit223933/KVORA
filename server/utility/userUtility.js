const User = require('../models/user');
const crypto = require('crypto');
const chalk = require('chalk');
const { throws } = require('assert');

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
}

module.exports = userUtility;
