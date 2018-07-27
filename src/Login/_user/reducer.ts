import * as fromActions from "./actions";


export interface State {
    user: {
        error: Error,
        loading: boolean,
        data: JSON | null
    } | {}
}


export const initialState: State = {
    user:{
        error: false,
        data: null,
        loading: false,
    }
};

export default (state = initialState, action: fromActions.Actions): State => {
    switch (action.type) {

        // Login
        case fromActions.ActionTypes.LOGIN_REQUEST: {
            return Object.assign(state, {
                user: {
                    loading: true
                }
            })
        }
        case fromActions.ActionTypes.LOGIN_SUCCESS: {
            const {payload} = action;
            return Object.assign(state, {
                user: {
                    loading: false,
                    data: payload,
                },
            })
        }
        case fromActions.ActionTypes.LOGIN_ERROR: {
            const {payload} = action;
            return Object.assign(state, {
                user: {
                    loading: false,
                    error: payload,
                }
            })
        }

        // Logout
        case fromActions.ActionTypes.LOGOUT_REQUEST: {
            return Object.assign(state, {
                user: {
                    loading: true
                }
            })
        }
        case fromActions.ActionTypes.LOGOUT_SUCCESS: {
            const {payload} = action;
            return Object.assign(state, {
                user: {
                    loading: false,
                    data: payload

                }
            })
        }
        case fromActions.ActionTypes.LOGOUT_ERROR: {
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
}
