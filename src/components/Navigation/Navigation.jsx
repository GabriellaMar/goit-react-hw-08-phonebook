
import { StyledNav } from "App.slyled"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectRegistrated } from "redux/selectors"

export const Navigation = () => {
    const registrated = useSelector(selectRegistrated)
    return (
        <StyledNav>
            <a className="logo"> 📔PHONEBOOK</a>
            <NavLink className="NavLink" to="/">Home</NavLink>
            {registrated && (<NavLink className="NavLink" to="/contacts">Contacts</NavLink>)}
        </StyledNav>
    )
}

