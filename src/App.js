import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

// Определяем светлую и темную темы
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

// Стилизация кнопки с помощью Emotion
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#90caf9' : '#bb86fc',
  color: theme.palette.text.primary,
  borderRadius: '8px',
  padding: '10px 20px',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? '#64b5f6' : '#3700b3', 
    transition: 'background-color 0.3s ease', // Плавный переход цвета
     },
}));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Функция для переключения темы
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Typography variant="h4">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
      </div>
    </ThemeProvider>
  );
}
export default App;
