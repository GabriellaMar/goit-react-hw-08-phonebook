import { NavLink } from "react-router-dom"

export const AuthMenu = ()=>{
    return (<div>
        <NavLink className="NavLink" to="/register">Register</NavLink>
        <NavLink className="NavLink" to="/login">Log in</NavLink>
      </div>)
}