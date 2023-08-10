import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { logOutUserThunk } from "redux/operations"
import { selectUser } from "redux/selectors"
import styles from './UserMenu.module.css'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';



export const UserMenu =()=>{
    const dispatch = useDispatch() 
    const user = useSelector(selectUser)
//     const {  UserOutlined  } = icons;
// const {  Avatar, Space  } = antd;

const handleLogOut =()=>{
    dispatch(logOutUserThunk())
}

    return (
        <div className={styles.userMenuContainer}>
     {/* <Space wrap size={16}> */}
        <Avatar size={60} icon={<UserOutlined />} />
        {/* <Avatar size="large" icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Avatar size="small" icon={<UserOutlined />} />
      </Space> */}
            <p className={styles.welcomeText}>Welcome, {user.email}</p>
            <button type='button'onClick ={handleLogOut}>Log out</button>
        </div>
    )
}