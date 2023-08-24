import { StaledTekhParagraph, StyledMainTittle, StyledParagraph } from "App.slyled";
import { useSelector } from "react-redux";
import { selectRegistrated } from "redux/selectors";


const HomePage = ()=>{
    const registrated = useSelector(selectRegistrated)
return (
    registrated ? (<>
    <StyledMainTittle>Welcome to your PhoneBook 📔 </StyledMainTittle>
          <StaledTekhParagraph>Technology used: (React/React Hooks, Redux/Redux Toolkit, React Router, PropTypes, Redux Persist, Ant Desing, Styled Components)</StaledTekhParagraph>
    </>
    ):( 
        <>
        <StyledMainTittle>Welcome to your PhoneBook 📔 </StyledMainTittle>
        <StyledParagraph>Register and create your private contact book</StyledParagraph>
        <StaledTekhParagraph >Technology used: (React/React Hooks, Redux/Redux Toolkit, React Router, PropTypes, Redux Persist, Ant Desing, Styled Components)</StaledTekhParagraph>
        </>) 
)
}

export default HomePage;