import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from 'pages/HomePage.js';
import WelcomeMain from 'components/WelcomeMain';
import WelcomeLoginedUser from 'components/WelcomeLoginedUser';
import SignIn from 'components/Signin';
import SignUp from 'components/Signup';
import ContactsPage from 'pages/ContactsPage';

const theme = createTheme();

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage>
                <WelcomeMain />
              </HomePage>
            }
          />
          <Route
            path="/signin"
            element={
              <HomePage>
                <SignIn />
              </HomePage>
            }
          />
          <Route
            path="/signup"
            element={
              <HomePage>
                <SignUp />
              </HomePage>
            }
          />
          <Route
            path="/welcome"
            element={
              <HomePage>
                <WelcomeLoginedUser />
              </HomePage>
            }
          />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
