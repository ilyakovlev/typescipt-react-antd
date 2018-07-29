import { action } from 'typesafe-actions';
import { User, UserActionTypes } from "./types";


export const loginError = (error: Error) => action(UserActionTypes.LOGIN_ERROR, {error});
export const loginSuccess = (data: User) => action(UserActionTypes.LOGIN_SUCCESS, {data});
export const loginRequest = (login: string, password: string) => action(UserActionTypes.LOGIN_REQUEST, {
    login,
    password
});

export const logoutError = (error: Error) => action(UserActionTypes.LOGOUT_ERROR, {error});
export const logoutSuccess = (data: JSON) => action(UserActionTypes.LOGOUT_SUCCESS, {data});
export const logoutRequest = () => action(UserActionTypes.LOGOUT_REQUEST);
