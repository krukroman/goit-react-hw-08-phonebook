import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import HomePage from 'pages/HomePage.js';
import WelcomeMain from 'components/WelcomeMain';
import Spinner from 'components/Spinner';

import PrivatRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import { authOperations, authSelectors } from 'redux/auth';

import LOADING_STATUS from 'components/loading-status';

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
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    (fetchCurrentUserSatus === LOADING_STATUS.REJECTED ||
      fetchCurrentUserSatus === LOADING_STATUS.SUCCESS) && (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <HomePage>
                  <WelcomeMain />
                </HomePage>
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <HomePage>
                  <Suspense fallback={<Spinner />}>
                    <SignIn />
                  </Suspense>
                </HomePage>
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <HomePage>
                  <Suspense fallback={<Spinner />}>
                    <SignUp />
                  </Suspense>
                </HomePage>
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute redirectTo="/signin">
                <Suspense fallback={<Spinner />}>
                  <ContactsPage />
                </Suspense>
              </PrivatRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    )
  );
}
