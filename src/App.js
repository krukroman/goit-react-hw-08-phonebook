import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import authSelectors from 'redux/auth/auth-selectors';
import authOperatins from 'redux/auth/auth-operations';
import HomePage from 'pages/HomePage.js';
import WelcomeMain from 'components/WelcomeMain';
import Spinner from 'components/Spinner';
import PrivatRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const SignIn = lazy(() => import('components/Signin'));
const SignUp = lazy(() => import('components/Signup'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const theme = createTheme();

export default function App() {
  const fetchCurrentUserSatus = useSelector(
    authSelectors.getFetchingCurrentStatus,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperatins.fetchCurrentUser());
  }, [dispatch]);

  return (
    !fetchCurrentUserSatus && (
      <ThemeProvider theme={theme}>
        <Switch>
          <PublicRoute path="/" exact redirectTo="/contacts" restricted>
            <HomePage>
              <WelcomeMain />
            </HomePage>
          </PublicRoute>
          <PublicRoute path="/signin" exact redirectTo="/contacts" restricted>
            <HomePage>
              <Suspense fallback={<Spinner />}>
                <SignIn />
              </Suspense>
            </HomePage>
          </PublicRoute>
          <PublicRoute path="/signup" exact redirectTo="/contacts" restricted>
            <HomePage>
              <Suspense fallback={<Spinner />}>
                <SignUp />
              </Suspense>
            </HomePage>
          </PublicRoute>
          <PrivatRoute path="/contacts" exact redirectTo="/signin">
            <Suspense fallback={<Spinner />}>
              <ContactsPage />
            </Suspense>
          </PrivatRoute>
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    )
  );
}
