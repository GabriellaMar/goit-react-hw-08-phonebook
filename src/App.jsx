
 import { useDispatch, useSelector } from 'react-redux';
 import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
// import { selectFilter } from 'redux/selectors';
import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { StyledApp, StyledHeader, StyledLoading, StyledNav } from './components/App.slyled';
import { Navigation } from './components/Navigation/Navigation';
import { selectRegistrated, selectToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Spin } from 'antd';





// import { selectContacts } from 'redux/selectors';
const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
 const ContactsPage = lazy(()=> import('./pages/ContactsPage'))



export const App = () => {
   const dispatch = useDispatch();

  const token = useSelector(selectToken)
 const registrated = useSelector(selectRegistrated)

  useEffect(() => {
    if (!token) return;
    dispatch(refreshUserThunk());
  }, [token, dispatch]);


  useEffect(() => {
    if (!token) return;
    dispatch(fetchContactsThunk(token));
  }, [ dispatch]);

  return (
    <StyledApp>
    <StyledHeader >
       <Navigation /> 
       {registrated ? <UserMenu/> : (<> 
       <NavLink className="NavLink" to="/register">Register</NavLink>
        <NavLink className="NavLink" to="/login">Log in</NavLink>
         </>)}
    
  </StyledHeader>
  <main>
  <Suspense fallback={<StyledLoading className="loadingContainer">
    <Spin size="large" />
  </StyledLoading>}
  >
<Routes>
  <Route path='/' element ={<HomePage/>}/>
  <Route path ='/register' element={<RegisterPage/>}/>
  <Route path='/login' element ={<LoginPage/>}/> 
   <Route path ='/contacts' element={<ContactsPage/>}/> 
</Routes>
</Suspense>
  </main>
    </StyledApp>
  );
  
};


{/* <StyledNav>
        <NavLink className="NavLink" to="/">Home</NavLink>
        <NavLink className="NavLink" to="/contacts">Contacts</NavLink>
        </StyledNav> */}
        
        {/* <NavLink className="NavLink" to="/register">Register</NavLink>
        <NavLink className="NavLink" to="/login">Log in</NavLink>  */}
  {/* <div>
      <h1>Phonebook</h1>
      {isLoading && !error && <b>  Loading...</b>}
       {error && <p>{error.message}</p>}

       <ContactForm />
       <h1>Contacts</h1>
     <Filter filter={filter} />
       <ContactList />
     </div> */}