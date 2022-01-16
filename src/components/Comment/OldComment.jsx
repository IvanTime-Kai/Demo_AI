import React from 'react'
import './Comment.scss'
import logo from '../../assets/img/logo.jpg'

export default function OldComment({
    content
}) {
    return (
        <div className="comment">
                <div className="comment-left">
                    <img src={logo} alt="logo" />
                </div>
                <div className="comment-right">
                    <span>{content.user[0]?.name || 'Phạm Huỳnh Hải Yến'}</span>
                    <p>{content.content}</p>
                </div>
            </div>
    )
}
