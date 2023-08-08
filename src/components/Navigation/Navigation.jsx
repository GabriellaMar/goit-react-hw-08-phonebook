import { StyledNav } from "components/App.slyled"
import { NavLink } from "react-router-dom"

export const Navigation =()=>{
    return (
        <StyledNav>
        <NavLink className="NavLink" to="/">Home</NavLink>
        <NavLink className="NavLink" to="/">Contacts</NavLink>
       </StyledNav>
    )
}