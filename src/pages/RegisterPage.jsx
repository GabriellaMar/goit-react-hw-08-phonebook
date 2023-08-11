import { RegistrationForm } from "components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectRegistrated } from "redux/selectors";

const RegisterPage = ()=>{
    const registrated = useSelector(selectRegistrated)

    if(registrated) return <Navigate to='/contacts' />

    return (
        <div>
            <RegistrationForm/>
        </div>
    )
}

export default RegisterPage;