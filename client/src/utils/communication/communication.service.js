import axios from "axios";
import {
	BASE_URL,
	LOGIN_ENDPOINT,
	REGISTRATION_ENDPOINT,
	REGISTRATION_TO_APPROVE_ENDPOINT,
} from "../../config";
import SessionManagement from "../session/SessionManagement";

// request interceptor to add the auth token header to requests
axios.interceptors.request.use(
	(config) =>
	{
		const localData = JSON.parse(SessionManagement.GetSession());

		if (!localData) return config;

		const accessToken = localData.token;

		if (accessToken)
		{
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	(error) =>
	{
		Promise.reject(error);
	},
);

axios.interceptors.response.use(
	(response) => response,
	(error) =>
	{
		// debugger;
		const originalRequest = error.config;

		// skip login 401
		if (originalRequest.url.includes('api/v1/auth'))
		{
			return Promise.reject(error);
		}

		const localData = JSON.parse(SessionManagement.GetSession());

		if (!localData) return Promise.reject(error.data ? error.data : error);

		const { refreshToken } = localData;

		if (
			refreshToken
            && error.response.status === 401
            && !originalRequest._retry
		)
		{
			originalRequest._retry = true;

			return axios
				.post(`${BASE_URL}v1/auth/refresh-token`, { refreshToken })
				.then((res) =>
				{
					if (res.status === 200)
					{
						const tokenObj = {
							token        : res.data.data.token,
							refreshToken : res.data.data.refreshToken.token,
						};

						SessionManagement.SetSession(tokenObj);

						console.info("Access token refreshed!");

						return axios(originalRequest);
					}
					console.log("api call 401");

					return null;
				});
		}

		return Promise.reject(error);
	},
);

const communicationService = {
	login	: (body, onSuccess, onError) => axios.post(LOGIN_ENDPOINT, body)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),

	registrationCreate	: (body, onSuccess, onError) => axios.post(REGISTRATION_ENDPOINT, body)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	registrationGetToBeApproved	: (body, onSuccess, onError) => axios
		.get(REGISTRATION_TO_APPROVE_ENDPOINT)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	registrationApprove	: (body, onSuccess, onError) => axios.put(REGISTRATION_ENDPOINT, body)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
};

export default communicationService;
