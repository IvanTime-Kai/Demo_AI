import axios from "axios"
import { DOMAIN } from "../utils/SettingSystem/SettingSystem"


class BaseServices {
    get = (url, data) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'GET',
        })
    }
    post = (url, data) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'POST',
            data : data
        })
    }
    delete = (url) => {
        return axios({
            url : `${DOMAIN}`,
            method : 'DELETE'
        })
    }
}

export default BaseServices