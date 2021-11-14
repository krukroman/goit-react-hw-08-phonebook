import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import authSelectors from 'redux/auth/auth-selectors';
import authOperatins from 'redux/auth/auth-operations';
import HomePage from 'pages/HomePage.js';
import WelcomeMain from 'components/WelcomeMain';
import WelcomeLoginedUser from 'components/WelcomeLoginedUser';
import SignIn from 'components/Signin';
import SignUp from 'components/Signup';
import ContactsPage from 'pages/ContactsPage';

const theme = createTheme();

export default function App() {
  const loginStatus = useSelector(authSelectors.getLoginStatus);
  const fetchCurrentUserSatus = useSelector(
    authSelectors.getFetchingCurrentStatus,
  );

  console.log(loginStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperatins.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {fetchCurrentUserSatus ? (
        <div> Loading... </div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="" element={<WelcomeMain />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="welcome" element={<WelcomeLoginedUser />} />
          </Route>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </ThemeProvider>
  );
}
