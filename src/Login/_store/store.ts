import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import userReducer from "../_user/reducer";
import {UserSagas} from "../_user/sagas";

const reducers = combineReducers({
    user: userReducer
});

export const configureStore = (initialState?: any) => {
    const loggerMiddleware = createLogger();
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducers, initialState, applyMiddleware(loggerMiddleware, sagaMiddleware));
    sagaMiddleware.run(UserSagas);
    return store;
};
