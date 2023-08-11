import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { StyledApp, StyledHeader, StyledLoading} from 'App.slyled';
import { Navigation } from './components/Navigation/Navigation';
import { selectRegistrated, selectToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Spin } from 'antd';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';


const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'))


export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken)
  const registrated = useSelector(selectRegistrated)

  useEffect(() => {
    if (!token || registrated) return;
    dispatch(refreshUserThunk());
  }, [token, dispatch, registrated]);

  return (
    <StyledApp>
      <StyledHeader >
        <Navigation />
        {registrated ? <UserMenu /> : (<AuthMenu />)
        }
      </StyledHeader>
      <main>
        <Suspense fallback={<StyledLoading className="loadingContainer">
          <Spin size="large" />
        </StyledLoading>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contacts' element={
            <PrivateRoute redirectTo='/login'>
              <ContactsPage />
            </PrivateRoute>
            } />
          </Routes>
        </Suspense>
      </main>
    </StyledApp>
  );
};
