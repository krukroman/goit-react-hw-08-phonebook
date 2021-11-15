import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import authSelectors from 'redux/auth/auth-selectors';
import authOperatins from 'redux/auth/auth-operations';
import HomePage from 'pages/HomePage.js';
import ContactsPage from 'pages/ContactsPage';
import WelcomeMain from 'components/WelcomeMain';
import WelcomeLoginedUser from 'components/WelcomeLoginedUser';
import SignIn from 'components/Signin';
import SignUp from 'components/Signup';

const theme = createTheme();

export default function App() {
  const loginStatus = useSelector(authSelectors.getLoginStatus);
  const fetchCurrentUserSatus = useSelector(
    authSelectors.getFetchingCurrentStatus,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperatins.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <HomePage>
            <WelcomeMain />
          </HomePage>
        </Route>
        <Route path="/signin" exact>
          <HomePage>
            <SignIn />
          </HomePage>
        </Route>
        <Route path="/signup" exact>
          <HomePage>
            <SignUp />
          </HomePage>
        </Route>
        <Route path="/welcome" exact>
          <HomePage>
            <WelcomeLoginedUser />
          </HomePage>
        </Route>
        <Route path="/contacts" exact>
          <ContactsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
}
