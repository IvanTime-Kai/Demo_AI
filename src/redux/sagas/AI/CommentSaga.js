import { call, put, takeLatest } from 'redux-saga/effects'
import { commentApi } from '../../../apis/CommentApi'
import { STATUS_CODE } from '../../../utils/SettingSystem/SettingSystem'
import { ADD_COMMENT, ALL_COMMENT, GET_COMMENT } from '../../types/types'
import Swal from 'sweetalert2'

function * getCommentApi(action){
    try{
        const {status, data} = yield call(() => commentApi.fetchComment(action.data))
        if(status === STATUS_CODE.SUCCESS){
            yield put({
                type : ALL_COMMENT,
                data : data
            })
        }

    }catch(err){
        console.log(err)
    }
}

function * postCommentApi(action){
    try{
        const { status, data } = yield call(() => commentApi.addComment(action.data))
        if(status === STATUS_CODE.SUCCESS){
            yield put({
                type : GET_COMMENT,
                data : action.data.lessonId
            })
            yield Swal.fire({
                icon: 'success',
                title: 'Bình luận thành công',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }catch(err){
        console.log(err)
    }
}

export function * theoDoiGetCommentApi(){
    yield takeLatest(GET_COMMENT, getCommentApi)
}

export function * theoDoiAddCommentApi(){
    yield takeLatest(ADD_COMMENT, postCommentApi)
}