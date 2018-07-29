import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { UserActionTypes } from "./types";
import * as api from "../_api/user";


function* login(action: any): SagaIterator {
    yield put({type: UserActionTypes.LOGIN_WAITING});

    const {data, error} = yield call(api.login, action.payload.login, action.payload.password);

    if (data) {
        yield put({type: UserActionTypes.LOGIN_SUCCESS, payload: data});
    } else {
        yield put({type: UserActionTypes.LOGIN_ERROR, payload: error})
    }
}


export default function* UserSagas() {
    yield [
        takeLatest(UserActionTypes.LOGIN_REQUEST, login),
    ]
}
