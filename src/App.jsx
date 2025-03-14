import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

import ThemeToggle from './components/buttons/themeButton';

import './App.css';
import { AppBar, Toolbar, Box } from '@mui/material';
import MainPage from './pages/mainPage';
import SecondPage from './pages/secondPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color='transparent' elevation={0}
        sx={{
          height: '128px',
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <img 
              src="/resource/DRFT-AI_Logo.svg" 
              alt="DRFT-AI" 
              width={200} 
              height={60} 
              
              className={isDarkMode ? "dark-mode-logo" : "light-mode-logo"}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </Box>
          </Toolbar>
      </AppBar>
      <Box>
        <MainPage />
      </Box>
      <SecondPage />
    </ThemeProvider>
  );
}

export default App;