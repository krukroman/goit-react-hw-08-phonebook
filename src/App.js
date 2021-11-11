import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from 'pages/HomePage.js';
import ContactsPage from 'pages/ContactsPage';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      <ContactsPage />
    </ThemeProvider>
  );
}
