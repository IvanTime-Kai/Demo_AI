import { all } from 'redux-saga/effects'
import * as ContentSaga from './AI/ContentSaga'
import * as CommentSaga from './AI/CommentSaga'
import * as UserSaga from './AI/UserSaga'
import * as RelativeSaga from './AI/RelativeSaga'


function * rootSaga(){
    yield all([
        ContentSaga.theoDoiGetAllApi(),
        ContentSaga.theoDoiGetLessonApi(),
        ContentSaga.theoDoiGetChapterApi(),
        CommentSaga.theoDoiGetCommentApi(),
        CommentSaga.theoDoiAddCommentApi(),
        UserSaga.theoDoiCreateUserApi(),
        UserSaga.theoDoiLoginUserApi(),
        RelativeSaga.theoDoiGetAllRelativeApi(),
        RelativeSaga.theoDoiGetRelativeApi()
    ])  
}

export default rootSaga