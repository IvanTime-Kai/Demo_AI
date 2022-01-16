import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Comment.scss'
import logo from '../../assets/img/logo.jpg'
import { ADD_COMMENT } from '../../redux/types/types'


export default function Comment({
    lessonId,
    content
}) {

    const { userLogin } = useSelector(state => state.UserReducer)


    const [comment , setComment ] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value} = e.target;
        setComment(value)
    }
    const handleComment = () => {
        dispatch({
            type : ADD_COMMENT,
            data : {
                userId: userLogin.others?._id,
                lessonId: lessonId,
                content: comment
            }
        }, 
        document.getElementById('idComment').value = ''
        )
    }
    return (
            <div className="comment">
                <div className="comment-left">
                    <img src={logo} alt="logo" />
                </div>
                <div className="comment-right">
                    <span>{userLogin.others?.name || 'Phạm Huỳnh Hải Yến'}</span>
                    <input  style={{ width : '300px'}} id='idComment' name='inputComment' placeholder="Add a comment ..." type="text" onChange={handleChange} />
                </div>
                <div className='comment-btn'>
                    <button className='btn btn-primary' onClick={handleComment} >Bình luận</button>
                </div>
            </div>
    )
}
