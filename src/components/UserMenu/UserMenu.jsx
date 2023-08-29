import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { logOutUserThunk } from "redux/operations"
import { selectUser } from "redux/selectors"
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { StyledContainer, StyledMenuBtn } from './UserMenu.styled';



export const UserMenu =()=>{
    const dispatch = useDispatch() 
    const user = useSelector(selectUser)


const handleLogOut =()=>{
    dispatch(logOutUserThunk())
}

    return (
        <StyledContainer >
        <Avatar size={60} icon={<UserOutlined />}  className='avatar' />
            <p className='welcomeText'>Welcome, {user.name}</p>
            <StyledMenuBtn type='button'onClick ={handleLogOut} >Log out</StyledMenuBtn>
        </StyledContainer>
    )
}