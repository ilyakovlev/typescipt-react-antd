import { Reducer } from "redux";
import { UserActionTypes, UserState } from "./types";


const initialState: UserState = {
    user: {
        data: null,
        error: null,
        loading: false
    }
};


const reducer: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {

        // Login
        case UserActionTypes.LOGIN_REQUEST: {
            return Object.assign(state, {
                user: {
                    loading: true
                }
            })
        }
        case UserActionTypes.LOGIN_SUCCESS: {
            const {payload} = action;
            return Object.assign(state, {
                user: {
                    loading: false,
                    data: payload,
                }
            })
        }
        case UserActionTypes.LOGIN_ERROR: {
            const {payload} = action;
            return Object.assign(state, {
                user: {
                    loading: false,
                    error: payload,
                }
            })
        }

        // Logout
        case UserActionTypes.LOGOUT_REQUEST: {
            return Object.assign(state, {
                user: {
                    loading: true
                }
            })
        }
        case UserActionTypes.LOGOUT_SUCCESS: {
            const {payload} = action;
            return Object.assign(state, {
                user: {
                    loading: false,
                    data: payload
                }
            })
        }
        case UserActionTypes.LOGOUT_ERROR: {
            const {payload} = action;
            return Object.assign(state, {
                user: {
                    loading: false,
                    error: payload,
                }
            })
        }
        default:
            return state
    }
};


export default reducer;
