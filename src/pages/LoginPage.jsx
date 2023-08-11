import { LoginForm } from "components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectRegistrated } from "redux/selectors";

const LoginPage = ()=>{
    const registrated = useSelector(selectRegistrated)

    if(registrated) return <Navigate to='/contacts' />
    return(
       <LoginForm/>
    )
}

export default LoginPage;