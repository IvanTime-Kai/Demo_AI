import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import ContentReducer from "../reducers/ContentReducer";
import LoadingReducer from "../reducers/LoadingReducer";
import RelativeReducer from "../reducers/RelativeReducer";

const rootReducer = combineReducers({
    ContentReducer,
    LoadingReducer,
    RelativeReducer
})

const middleWareSaga = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(middleWareSaga))

middleWareSaga.run(rootSaga)
export default store