import { useDispatch, useSelector } from "react-redux"
import { logOutUserThunk } from "redux/operations"
import { selectUser } from "redux/selectors"
import styles from './UserMenu.module.css'


export const UserMenu =()=>{
    const dispatch = useDispatch() 
    const user = useSelector(selectUser)

const handleLogOut =()=>{
    dispatch(logOutUserThunk())
}

    return (
        <div className={styles.userMenuContainer}>
            <p>Welcome, {user.email}</p>
            <button type='button'onClick ={handleLogOut}>Log out</button>
        </div>
    )
}