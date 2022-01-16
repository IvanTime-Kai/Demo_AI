import { GET_ALL_API, GET_CHAPTER_API, GET_CONTENT_CHECK_BOX, SEARCH } from "../types/types"



const initialState = {
    contentAll: [],
    contentChapter : [],
    contentChapter2: [],
    dataPart : ['Khái niệm', 'Tính chất', 'Dạng bài tập', 'Phương pháp giải']
}

const ContentReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_ALL_API : 
            return {...state, contentAll : action.data}
        case GET_CHAPTER_API :
            return {...state, contentChapter : action.data, contentChapter2 : action.data}
        case GET_CONTENT_CHECK_BOX : 
            return {...state, contentChapter : action.data}
        case SEARCH : 
            let contentNew = [...state.contentAll]
            let contentChapterNew = []
            contentNew.map((item) => {
                if(action.data.toLowerCase().includes(item.title.toLowerCase())){
                    contentChapterNew = [item]
                    item?.classify.map((part) => {
                        if(action.data.toLowerCase().includes(part.kind.toLowerCase())){
                            contentChapterNew = [{...item, classify : [part]}]
                            
                        }
                    })
                }else if(action.data.toLowerCase().includes(item.chapter.toLowerCase())){
                    contentChapterNew.push(item)
                }
            })

            console.log('------------------contentChapterNew', contentChapterNew)
            return {...state, contentChapter: contentChapterNew}
        default :
            return state
    }
}

export default ContentReducer