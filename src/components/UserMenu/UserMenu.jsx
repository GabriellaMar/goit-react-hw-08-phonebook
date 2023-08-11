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


const handleLogOut =()=>{
    dispatch(logOutUserThunk())
}

    return (
        <div className={styles.userMenuContainer}>
        <Avatar size={60} icon={<UserOutlined />} />
      
            <p className={styles.welcomeText}>Welcome, {user.email}</p>
            <button type='button'onClick ={handleLogOut} className={styles.userMenuBtn}>Log out</button>
        </div>
    )
}