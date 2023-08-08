
// import { ContactForm } from './ContactForm/ContactForm'
// import { Filter } from "./Filter/Filter";
// import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { StyledHeader, StyledNav } from './App.slyled';
import { Navigation } from './Navigation/Navigation';
// import { selectContacts } from 'redux/selectors';
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
 const ContactsPage = lazy(()=> import('../pages/Contacts'))



export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.contacts.contacts.isLoading);
  // const error = useSelector((state) => state.contacts.contacts.error);
  // const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);


  return (
    <div>
    <StyledHeader >
      <Navigation />
    {/* <StyledNav>
        <NavLink className="NavLink" to="/">Home</NavLink>
        <NavLink className="NavLink" to="/">Contacts</NavLink>
    </StyledNav> */}
        <div className="headerNavContainer">
        <NavLink className="NavLink" to="/register">Register</NavLink>
        <NavLink className="NavLink" to="/login">Log in</NavLink> 
        </div>
    
  </StyledHeader>
  <main>
<Routes>
  <Route path='/' element = {<HomePage/>}/>
  <Route path ='/register' element={<RegisterPage/>}/>
  <Route path='/login' element = {<LoginPage/>}/> 
   <Route path ='/contacts' element={<ContactsPage/>}/> 
</Routes>
    {/* <div>
      <h1>Phonebook</h1>
      {isLoading && !error && <b>  Loading...</b>}
       {error && <p>{error.message}</p>}

       <ContactForm />
       <h1>Contacts</h1>
     <Filter filter={filter} />
       <ContactList />
     </div> */}
  </main>
    
    </div>
  );
  
};

 