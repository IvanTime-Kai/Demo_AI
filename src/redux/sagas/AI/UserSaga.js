import { call, put, takeLatest, select} from 'redux-saga/effects'
import { userApi } from '../../../apis/UserApi'
import { history } from '../../../App'
import { STATUS_CODE, USER_LOGIN } from '../../../utils/SettingSystem/SettingSystem'
import { CREATE_USER, LOGIN_USER, USER_SIGN_IN_API } from '../../types/types'
import Swal from "sweetalert2"


function * loginUserApi(action){
    
    try{
        console.log('data', action.userLogin)
        const { status, data } = yield call(() => userApi.fetchLoginUser(action.userLogin))
        console.log('data', data)
        if( status === STATUS_CODE.SUCCESS){
            localStorage.setItem(USER_LOGIN, JSON.stringify(data))
            yield put({
                type : LOGIN_USER,
                data : data
            })
            yield Swal.fire({
                icon: 'success',
                title: 'Login Sucessful',
                showConfirmButton: false,
                timer: 1500
            })
            history.push('/home')
        }
    }catch(err){
        console.log(err)
        yield Swal.fire({
            icon: 'error',
            title: 'Login fail',
            showConfirmButton: false,
            timer: 1500
        })
    }
}
function * createUserApi(action){
    try{
        const { status, data} = yield call(() => userApi.fetchCreateUser(action.data))
        if(status === STATUS_CODE.SUCCESS){
            
        }
    }catch(err){
        console.log(err.response)
    }
}

export function * theoDoiLoginUserApi(){
    yield takeLatest(USER_SIGN_IN_API, loginUserApi)
}
export function * theoDoiCreateUserApi(){
    yield takeLatest(CREATE_USER, createUserApi)
}