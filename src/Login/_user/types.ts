export interface User extends ApiResponse {
    login: string,
    password: string
}


export enum UserActionTypes {
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


export interface UserState {
    readonly user: {
        readonly loading: boolean,
        readonly data: User | null,
        readonly error: Error | null
    }
}


export type ApiResponse = Record<string, any>
