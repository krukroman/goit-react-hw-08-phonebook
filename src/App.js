import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
          <Route path="/" element={<HomePage />}>
            <Route path="" element={<WelcomeMain />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="welcome" element={<WelcomeLoginedUser />} />
          </Route>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
