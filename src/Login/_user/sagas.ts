import {SagaIterator} from "redux-saga";
import {call, put, takeLatest} from "redux-saga/effects";
import * as api from "../_api/user";
import {Actions} from "./actions";
import * as fromAction from "./actions";


function* login(action : Actions): SagaIterator {
    yield put({type: fromAction.ActionTypes.LOGIN_WAITING});
    const {data,error} = yield call(api.login, action.payload, action.payload);

    if(data){
        yield put({type: fromAction.ActionTypes.LOGIN_SUCCESS, payload: data});
    }else {
        yield put({type: fromAction.ActionTypes.LOGIN_ERROR, payload: error})
    }
}

export function* UserSagas(){
    yield [
        takeLatest(fromAction.ActionTypes.LOGOUT_REQUEST, login),
    ]
}