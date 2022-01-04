import BaseServices from "../services/BaseServices";

class UserApis extends BaseServices {
    fetchLoginUser = (userLogin) => {
        return this.post('users/login', userLogin)
    }
    fetchCreateUser = (newUser) => {
        return this.post('users/', newUser)
    }
}

export const userApi = new UserApis();