import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from './styles/GlobalStyles';
import GamePage from './features/game/GamePage';
import './i18n/config';
import LandingPage from "./features/landing/LandingPage";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF9F66',
    },
    secondary: {
      main: '#FFB84D',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/game" element={<GamePage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
