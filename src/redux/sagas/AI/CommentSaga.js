import { call, put, takeLatest } from 'redux-saga/effects'
import { commentApi } from '../../../apis/CommentApi'
import { GET_COMMENT } from '../../types/types'


function * getCommentApi(action){
    try{
        const res = yield call(() => commentApi.fetchComment(action.data))
        // console.log(res)
    }catch(err){
        console.log(err)
    }
}

export function * theoDoiGetCommentApi(){
    yield takeLatest(GET_COMMENT, getCommentApi)
}