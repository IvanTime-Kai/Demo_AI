import { call, put, takeLatest, delay } from 'redux-saga/effects'
import { contentApi } from '../../../apis/ContentApi'
import { STATUS_CODE } from '../../../utils/SettingSystem/SettingSystem'
import { DISPLAY_LOADING,HIDDEN_LOADING, GET_CHAPTER, GET_CHAPTER_API, GET_LESSON, GET_ALL, GET_ALL_API } from '../../types/types'


function * GetAllApi(){
    try{
        let {data, status} = yield call(() => contentApi.fetchAll())
        if(status === STATUS_CODE.SUCCESS){
            yield put({
                type : GET_ALL_API,
                data : data
            })
        }
    }catch(err){
        console.log(err)
    }
}

function * GetLessonApi(action){
    try{
        let {data, status} = yield call(() => contentApi.fetchLesson(action.data))
        if(status === STATUS_CODE.SUCCESS){
            // yield put({
            //     type : DISPLAY_LOADING
            // })
            // yield delay(300)
            yield put({
                type : GET_CHAPTER_API,
                data : data
            })
            // yield put({
            //     type : HIDDEN_LOADING
            // })
        }
    }catch(err){
        console.log(err.response)
    }
}
function * GetChapterApi(action){
    try{
        let {data, status} = yield call(() => contentApi.fetchChapter(action.data))
        if(status === STATUS_CODE.SUCCESS){
            // yield put({
            //     type : DISPLAY_LOADING
            // })
            // yield delay(300)
            yield put({
                type : GET_CHAPTER_API,
                data : data
            })
            // yield put({
            //     type : HIDDEN_LOADING
            // })
        }
    }catch(err){
        console.log(err.response)
    }
}

export function * theoDoiGetLessonApi(){
    yield takeLatest(GET_LESSON, GetLessonApi)
}

export function * theoDoiGetChapterApi(){
    yield takeLatest(GET_CHAPTER, GetChapterApi)
}

export function * theoDoiGetAllApi(){
    yield takeLatest(GET_ALL, GetAllApi)
}