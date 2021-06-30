import { IDENTIFICATION_STORAGE } from "../../config";

const SessionManagement = {
	SetSession : (obj) =>
	{
		sessionStorage.setItem(IDENTIFICATION_STORAGE, JSON.stringify(obj));
	},
	GetSession : () =>
	{
		if (sessionStorage.getItem(IDENTIFICATION_STORAGE) === null)
		{
			return null;
		}
		else
		{
			return sessionStorage.getItem(IDENTIFICATION_STORAGE);
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
			const jsonObj = JSON.parse(session);

			sessionObj = Object.assign(jsonObj, obj);
		}

		SessionManagement.SetSession(sessionObj);
	},
	DestroySession : () =>
	{
		sessionStorage.removeItem(IDENTIFICATION_STORAGE);
	},
};

export default SessionManagement;
