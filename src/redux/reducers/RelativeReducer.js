import { GET_ALL_RELATIVE_API, GET_RELATIVE_API } from "../types/types"



const initialState = {
    allRelative: [],
    relative : [],
}

const RelativeReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_ALL_RELATIVE_API : 
            return {...state, allRelative : action.data}
        case GET_RELATIVE_API :
            return {...state, relative : action.data}
        default :
            return state
    }
}

export default RelativeReducer