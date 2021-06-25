import { createSlice } from '@reduxjs/toolkit';
import SessionManagement from '../../session/SessionManagement';

const initialUser = SessionManagement.GetSession()
	? JSON.parse(SessionManagement.GetSession()).user
		? JSON.parse(SessionManagement.GetSession()).user
		: null : null;

const slice = createSlice({
	name         : 'user',
	initialState : {
		user : initialUser,
	},
	reducers : {
		loginSuccess : (state, action) =>
		{
			state.user = action.payload;
			SessionManagement.GetSetSession({ user: action.payload });
		},
		logoutSuccess : (state, action) =>
		{
			state.user = null;
			SessionManagement.GetSetSession({ user: null });
		},
	},
});

export default slice.reducer;
// Actions
export const { loginSuccess, logoutSuccess } = slice.actions;

export const login = ({ username, password }) => async (dispatch) =>
{
	try
	{
		dispatch(loginSuccess({ username }));
	}
	catch (e)
	{
		console.error(e.message);

		return e;
	}

	return true;
};
export const logout = () => async (dispatch) =>
{
	try
	{
		// const res = await api.post('/api/auth/logout/')
		return dispatch(logoutSuccess());
	}
	catch (e)
	{
		return console.error(e.message);
	}
};
