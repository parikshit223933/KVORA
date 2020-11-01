import express from 'express';

export default class Util {
	isNullOrUndefined = (param: any) => {
		if (param.length !== undefined) {
			// it is an array
			let isInvalid = false;
			param.forEach((element: any) => {
				if (!element) {
					isInvalid = true;
				}
			});
			return isInvalid;
		} else {
			// it is not an array
			return !param;
		}
	};
	areEqual = (param1: any, param2: any) => {
		return param1 === param2;
	};
	response = (
		res: express.Response,
		statusCode = 500,
		message = 'Internal Server Error!',
		success = false,
		data = {}
	) => {
		return res.status(statusCode).json({
			message,
			success,
			data,
		});
	};
}
