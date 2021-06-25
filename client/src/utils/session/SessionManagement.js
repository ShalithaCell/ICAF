import { IDENTIFICATION_STORAGE } from "../../config";

const SessionManagement = {
	SetSession : (obj) =>
	{
		localStorage.setItem(IDENTIFICATION_STORAGE, JSON.stringify(obj));
	},
	GetSession : () =>
	{
		if (localStorage.getItem(IDENTIFICATION_STORAGE) === null)
		{
			return null;
		}
		else
		{
			return localStorage.getItem(IDENTIFICATION_STORAGE);
		}
	},
	GetSetSession : (obj) =>
	{
		let sessionObj = {};
		const session = SessionManagement.GetSession();

		if (!session)
		{
			sessionObj = Object.assign(sessionObj, obj);
		}
		else
		{
			sessionObj = Object.assign(session, obj);
		}

		SessionManagement.SetSession(sessionObj);
	},
	DestroySession : () =>
	{
		localStorage.removeItem(IDENTIFICATION_STORAGE);
	},
};

export default SessionManagement;
