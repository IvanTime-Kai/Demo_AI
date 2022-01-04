import { GET_ALL_API, GET_CHAPTER_API, GET_CONTENT_CHECK_BOX } from "../types/types"



const initialState = {
    contentAll: [],
    contentChapter : [],
    contentChapter2: []
}

const ContentReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_ALL_API : 
            return {...state, contentAll : action.data}
        case GET_CHAPTER_API :
            return {...state, contentChapter : action.data, contentChapter2 : action.data}
        case GET_CONTENT_CHECK_BOX : 
            return {...state, contentChapter : action.data}
        default :
            return state
    }
}

export default ContentReducer