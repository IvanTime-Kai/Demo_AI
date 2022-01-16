import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import ContentReducer from "../reducers/ContentReducer";
import LoadingReducer from "../reducers/LoadingReducer";
import RelativeReducer from "../reducers/RelativeReducer";
import UserReducer from "../reducers/UserReducer";
import CommentReducer from "../reducers/CommentReducer";

const rootReducer = combineReducers({
    ContentReducer,
    LoadingReducer,
    RelativeReducer,
    UserReducer,
    CommentReducer
})

const middleWareSaga = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(middleWareSaga))

middleWareSaga.run(rootSaga)
export default store