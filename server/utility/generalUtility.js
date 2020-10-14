const express = require('express');

class generalUtility {
	isNullOrUndefined = (param) => {
		if (param.length != undefined) {
			// it is an array
			let isInvalid = false;
			param.forEach((element) => {
				if (!element) {
					isInvalid = true;
				}
			});
			return isInvalid;
		} else {
			// it is not an array
			if (!param) {
				return true;
			}
			return false;
		}
    };
    areEqual=(param1, param2)=>
    {
        return param1==param2;
    }
	response = (
		res,
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
module.exports = generalUtility;
