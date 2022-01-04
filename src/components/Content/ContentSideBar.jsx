import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ContentSideBar.scss'
import { GET_ALL_RELATIVE, GET_RELATIVE } from '../../redux/types/types'
import { Drawer} from 'antd';

export default function ContentSideBar({ contentChapter, lesson }) {

    const dispatch = useDispatch()
    const { allRelative, relative} = useSelector(state => state.RelativeReducer)
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
        dispatch({
            type : GET_RELATIVE,
            data : lesson
        })
    };
    const onClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        dispatch({
            type: GET_ALL_RELATIVE,
            data: lesson
        })
    }, [lesson])

    return (
        <>
            <div className="content">
                <div className="row" style={{ height: '100%', width: '100%', margin: '0' }}>
                    <div className="col-10 content-left">
                        {contentChapter.map((item, index) => {
                            return (
                                <div key={index} className='content_part'>
                                    <h1>{item?.chapter}</h1>
                                    <h3>{item?.title}</h3>
                                    {item?.classify.map((part, count) => {
                                        return (
                                            <div key={count}>
                                                <h4>{count + 1}. {part?.kind}</h4>
                                                <div className='content_number' dangerouslySetInnerHTML={{ __html: part?.content }}></div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-2 content-right">
                        <h4>Kiến thức liên quan</h4>
                        <ul>
                            {allRelative?.map((item, index) => {
                                return <li onClick={showDrawer} >
                                    <span to="/home" key={index}>{item.title}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <Drawer 
                title={<span style={{color : 'blue', fontSize: '2rem', marginLeft: '60px'}}>Nội dung</span>} 
                placement="right" 
                onClose={onClose} 
                width={700}
                closable={true}
                visible={visible}>
                    {allRelative?.map((item, index) => {
                                return <div key={index} style={{ fontSize : '16px'}} dangerouslySetInnerHTML={{ __html: item?.content }} ></div>
                            })}
            </Drawer>
        </>
    )
}
