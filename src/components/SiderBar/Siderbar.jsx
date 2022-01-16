import React, { useState, useEffect, useRef } from 'react'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    TeamOutlined,
    RedditOutlined,
    SlackOutlined,
    ApartmentOutlined
} from '@ant-design/icons';
import './SideBar.scss'
import logo from '../../assets/img/logo.jpg'
import { Input, AutoComplete } from 'antd';
import ContentSideBar from '../Content/ContentSideBar';
import RadioButton from '../RadioButton/RadioButton';
import data from '../../assets/ChapterAndLesson.json'
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL, GET_ALL_RELATIVE, GET_CHAPTER, GET_COMMENT, GET_LESSON, SEARCH } from '../../redux/types/types';
import { actSearch } from '../../redux/actions/ContentAction';


const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;


export default function SiderBar() {
    const [state, setState] = useState({
        collapsed: false,
    });
    const [chapter, setChapter] = useState('Logic')
    const [lesson, setLesson] = useState('')
    const [value, setValue] = useState('')
    

    let searchValue = useRef(null)
    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    const { contentChapter, contentAll } = useSelector(state => state.ContentReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: GET_CHAPTER,
            data: chapter
        })
        dispatch({
            type: GET_ALL
        })
    }, [])
    useEffect(() => {
        dispatch({
            type: GET_LESSON,
            data: lesson
        })
        dispatch({
            type : GET_COMMENT,
            data : lesson
        })
    }, [lesson])

    const handleOnChangeSubMenu = ({ key, domEvent }) => {
        dispatch({
            type: GET_CHAPTER,
            data: key
        })
    }

    // const handleOnChangeSubMenu = (data) => {
    //     console.log('data', data);
    // }
    const handleSelectMenuItem = ({ key, keyPath }) => {
        setLesson(key)
        dispatch({
            type : GET_COMMENT,
            data : key
        })
        
    }
    return (
        <Layout>
            <Header className='header-layout'>
                <div className='bg-filter'></div>
                <div className='header-layout-content'>
                    <span>TRA CỨU KIẾN THỨC TOÁN RỜI RẠC</span>
                        <AutoComplete
                            className='header-layout-content-input'
                            dropdownMatchSelectWidth={0}
                            value={value}
                            ref={searchValue}
                            options={contentAll?.map((item, index) => {
                                return { label: item.title, index: item.title }
                            })}
                            filterOption={(inputValue, option) => {
                                return option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }}
                            // onSearch = {(value) => {
                            //     if(searchValue.current ){
                            //         clearTimeout(searchValue.current)
                            //     }
                            //     searchValue.current = setTimeout(() => {
                            //         // dispatch({
                            //         //     type : GET_LESSON,
                            //         //     data : value
                            //         // })
                                
                            //         dispatch(actSearch(value))
                                    
                            //     }, 300)
                            // }}
                            onChange={(value) => {
                                setValue(value)
                            }}
                            onKeyDown={(e) => {
                                // const { value } = e.target
                                if(e.key === 'Enter'){
                                    if(value == ''){
                                        dispatch({
                                            type: GET_CHAPTER,
                                            data: chapter
                                        })
                                    }else{
                                        dispatch(actSearch(value))
                                    }
                                }
                            }}
                            onSelect={(value, option) => {
                                console.log('----------heloo')
                            }}
                        >
                            {/* <Input.Search placeholder="input here" enterButton /> */}
                        </AutoComplete>
                    <div className="carousel__scroll">                
                        <i className="fa fa-chevron-down"></i>
                    </div>
                </div>
                
            </Header>
            <Layout>
                <Sider className="sider" trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo" style={{ padding: '0' }}>
                        {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </div>
                    <Menu className="sider__item" theme="dark" mode="inline" defaultSelectedKeys={['sub1']} style={{ fontSize: '1rem' }}>
                        <SubMenu key='Logic' icon={<RedditOutlined />} title='Logic' onTitleClick={handleOnChangeSubMenu} >
                            {
                                contentAll?.filter((item) => item.chapter === 'Logic').map((item1) => {
                                    return <Menu.Item key={item1._id} onClick={handleSelectMenuItem} >{item1.title}</Menu.Item>
                                })
                            }
                        </SubMenu>
                        <SubMenu key="Đại số Boolean" icon={<SlackOutlined />} title="Đại số Boolean" onTitleClick={handleOnChangeSubMenu}>
                            {
                                contentAll?.filter((item) => item.chapter === 'Đại số Boolean').map((item1) => {
                                    return <Menu.Item key={item1._id} onClick={handleSelectMenuItem} >{item1.title}</Menu.Item>
                                })
                            }
                        </SubMenu>
                        <SubMenu key="Quan hệ" icon={<ApartmentOutlined />} title='Quan hệ' onTitleClick={handleOnChangeSubMenu} >
                            {
                                contentAll?.filter((item) => item.chapter === 'Quan hệ').map((item1) => {
                                    return <Menu.Item key={item1._id} onClick={handleSelectMenuItem} >{item1.title}</Menu.Item>
                                })
                            }
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background">
                        {/* <Search
                            className="site-layout-search"
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        /> */}
                        <RadioButton />
                    </Header>
                    <Content>
                        <ContentSideBar contentChapter={contentChapter} lesson={lesson} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
