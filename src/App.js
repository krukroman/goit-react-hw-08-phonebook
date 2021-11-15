import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import authSelectors from 'redux/auth/auth-selectors';
import authOperatins from 'redux/auth/auth-operations';
import HomePage from 'pages/HomePage.js';
import ContactsPage from 'pages/ContactsPage';
import WelcomeMain from 'components/WelcomeMain';
import WelcomeLoginedUser from 'components/WelcomeLoginedUser';
import SignIn from 'components/Signin';
import SignUp from 'components/Signup';
import PrivatRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

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
          <PublicRoute path="/" exact redirectTo="/welcome" restricted>
            <HomePage>
              <WelcomeMain />
            </HomePage>
          </PublicRoute>
          <PublicRoute path="/signin" exact redirectTo="/welcome" restricted>
            <HomePage>
              <SignIn />
            </HomePage>
          </PublicRoute>
          <PublicRoute path="/signup" exact redirectTo="/welcome" restricted>
            <HomePage>
              <SignUp />
            </HomePage>
          </PublicRoute>
          <PrivatRoute path="/welcome" exact redirectTo="/">
            <HomePage>
              <WelcomeLoginedUser />
            </HomePage>
          </PrivatRoute>
          <PrivatRoute path="/contacts" exact redirectTo="/">
            <ContactsPage />
          </PrivatRoute>
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    )
  );
}
