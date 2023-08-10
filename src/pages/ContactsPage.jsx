import { StyledContainer } from "components/App.slyled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useSelector } from "react-redux";
import { selectFilter } from "redux/selectors";


const ContactsPage = ()=>{

    // const isLoading = useSelector((state) => state.contacts.contacts.isLoading);
    const error = useSelector((state) => state.contacts.contacts.error);
    const filter = useSelector(selectFilter);
    return (
        <StyledContainer >
        <h1>Phonebook</h1>
        {/* {isLoading && !error && <b>  Loading...</b>} */}
         {error && <p>{error.message}</p>}
         <ContactForm />
         <h1>Contacts</h1>
       <Filter filter={filter} />
         <ContactList />
       </StyledContainer>
    )
    }
    
    export default ContactsPage;