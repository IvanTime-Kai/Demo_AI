import { DISPLAY_LOADING } from "../types/types"
import { HIDDEN_LOADING } from "../types/types"



const initialState = {
    isLoading : false
}

const LoadingReducer = (state = initialState, action) => {
    switch(action.type){
        case DISPLAY_LOADING:
            return {...state, isLoading : true}
        case HIDDEN_LOADING:
            return {...state, isLoading : false}
        default : 
            return state;
    }
} 

export default LoadingReducer