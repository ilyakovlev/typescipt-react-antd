import {createAction} from "./action-helpers";
import {ActionsUnion} from './types';


export enum ActionTypes {
    // Login
    LOGIN_REQUEST = "user/LOGIN_REQUEST",
    LOGIN_WAITING = "user/LOGIN_WAITING",
    LOGIN_SUCCESS = "user/LOGIN_SUCCESS",
    LOGIN_ERROR = "user/LOGIN_ERROR",

    // Logout
    LOGOUT_REQUEST = "user/LOGOUT_REQUEST",
    LOGOUT_WAITING = "user/LOGOUT_WAITING",
    LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS",
    LOGOUT_ERROR = "user/LOGOUT_ERROR"
}


export const UserActions = {
    // Login UserActions
    loginError: (error: Error) => createAction(ActionTypes.LOGIN_ERROR, {error}),
    loginRequest: (login: string, password: string) => createAction(ActionTypes.LOGIN_REQUEST, {login, password}),
    loginSuccess: (data: any) => createAction(ActionTypes.LOGIN_SUCCESS, {data}),

    // Logout UserActions
    logoutError: (error: Error) => createAction(ActionTypes.LOGOUT_ERROR, {error}),
    logoutRequest: () => createAction(ActionTypes.LOGOUT_REQUEST,{}),
    logoutSuccess: (data: any) => createAction(ActionTypes.LOGOUT_SUCCESS, {data}),
};

export type Actions =  ActionsUnion<typeof UserActions>
