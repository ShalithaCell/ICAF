import React from "react";
import { SessionManagement } from "../index";

const checkAuthorization = (level) =>
{
	let authLevel = [];

	switch (level)
	{
	case 'user':
		authLevel = [ 1, 2, 3, 4 ];
		break;
	case 'reviewer':
		authLevel = [ 1, 2, 3 ];
		break;
	case 'editor':
		authLevel = [ 1, 2 ];
		break;
	case 'admin':
		authLevel = [ 1 ];
		break;
	default:
		authLevel = [];
	}

	try
	{
		const sessionData = JSON.parse(SessionManagement.GetSession());

		if (!(sessionData.user.role.priority in authLevel))
		{
			return false;
		}
	}
	catch (e)
	{
		return false;
	}

	return true;
};

export default checkAuthorization;
