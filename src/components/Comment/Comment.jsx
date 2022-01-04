import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Comment.scss'
import logo from '../../assets/img/logo.jpg'

import { InlineMath, BlockMath } from 'react-katex';
import MathJax from 'react-mathjax';
import katex from 'katex';

export default function Comment() {
    const dispatch = useDispatch()
    const handleChange = () => {
    }
    return (
            <div className="comment">
                <div className="comment-left">
                    <img src={logo} alt="logo" />
                </div>
                <div className="comment-right">
                    <span>{}</span>
                    <input type="text" value="hihi" onChange={handleChange} />
                </div>
            </div>
    )
}
