import { ALL_COMMENT } from "../types/types";

const initialState = {
    allComment : []
}

const CommentReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_COMMENT:
            return {...state, allComment : action.data}
        default : 
            return state;
    }
} 

export default CommentReducer