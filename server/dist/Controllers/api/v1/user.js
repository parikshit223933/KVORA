const util = new (require('../../../utility/utils'))();
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import UserModel from '../../../models/user';
import chalk from 'chalk';
import jwt from 'jsonwebtoken';
const passportJWTSecret = 'secret';
// Input: formData {firstName, lastName, email, password}
export const signUp = async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
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
    }
    catch (error) {
        // tslint:disable-next-line:no-console
        console.log(chalk.redBright(error));
        return util.response(res, StatusCodes.INTERNAL_SERVER_ERROR, getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR), false);
    }
};
//# sourceMappingURL=user.js.map