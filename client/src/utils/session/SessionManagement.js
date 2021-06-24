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
	DestroySession : () =>
	{
		localStorage.removeItem(IDENTIFICATION_STORAGE);
	},
};

export default SessionManagement;
