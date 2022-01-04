import { call, put, takeLatest } from 'redux-saga/effects'
import { relativeApi } from '../../../apis/RelativeApi'
import { STATUS_CODE } from '../../../utils/SettingSystem/SettingSystem'
import { GET_ALL_RELATIVE, GET_ALL_RELATIVE_API, GET_RELATIVE, GET_RELATIVE_API } from '../../types/types'



function * getAllRelativeApi(action){
    try{
        const {data, status} = yield call(() => relativeApi.fetchAllRelative(action.data))
        if(status === STATUS_CODE.SUCCESS){
            yield put({
                type : GET_ALL_RELATIVE_API,
                data: data
            })
        }
        
    }catch(err){
        console.log(err)
    }
}

function * getRelativeApi(action){
    try{
        const {data, status} = yield call(() => relativeApi.fetchRelative(action.data))

        
        if(status === STATUS_CODE.SUCCESS){
            yield put({
                type : GET_RELATIVE_API,
                data : data
            })
        }
        
    }catch(err){
        console.log(err)
    }
}

export function * theoDoiGetAllRelativeApi(){
    yield takeLatest(GET_ALL_RELATIVE, getAllRelativeApi)
}

export function * theoDoiGetRelativeApi(){
    yield takeLatest(GET_RELATIVE, getRelativeApi)
}