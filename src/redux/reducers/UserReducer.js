import {USER_LOGIN} from '../../utils/SettingSystem/SettingSystem'
import { LOGIN_USER } from '../types/types'



let user = {}
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const intialState = {
    userLogin : user,
}

const UserReducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN_USER :
            return { ...state, userLogin : action.data}
        default:
            return state
        }
}

export default UserReducer