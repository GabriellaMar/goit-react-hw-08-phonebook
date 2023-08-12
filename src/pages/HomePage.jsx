import { StyledMainTittle, StyledParagraph } from "App.slyled";
import { useSelector } from "react-redux";
import { selectRegistrated } from "redux/selectors";

const HomePage = ()=>{
    const registrated = useSelector(selectRegistrated)
return (
    registrated ? (<StyledMainTittle>Welcome to your PhoneBook 📔 </StyledMainTittle>):( 
        <>
        <StyledMainTittle>Welcome to your PhoneBook 📔 </StyledMainTittle>
        <StyledParagraph>Register and create your private contact book</StyledParagraph>
        </>) 
)
}

export default HomePage;