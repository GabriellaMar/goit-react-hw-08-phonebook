// import { StyledContainer } from "components/App.slyled";
import { Spin } from "antd";
import { StyledContainer, StyledLoading, StyledTittle } from "App.slyled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "redux/operations";
import { selectContactsError, selectFilter, selectIsLoading, selectRegistrated} from "redux/selectors";


const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const registrated = useSelector(selectRegistrated)

  useEffect(() => {
    if (!registrated) return;
    dispatch(fetchContactsThunk());
  }, [registrated, dispatch]);

  return (
    <StyledContainer >
      <StyledTittle>Phonebook</StyledTittle>
       {isLoading && !error && <StyledLoading className="loadingContainer">
          <Spin size="large" />
        </StyledLoading>} 
      {error && <p> Oops, some error occured... {error}</p>}
      <ContactForm />
      <StyledTittle>Contacts</StyledTittle>
      <Filter filter={filter} />
      <ContactList />
    </StyledContainer>
  )
}

export default ContactsPage;