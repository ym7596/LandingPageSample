import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
  
    return (
        <Box
        sx={{
          width: '100%',
          p: 4,
          backgroundColor: isDarkMode ? 'white' : 'black',
          color: isDarkMode ? 'black' : 'white',
          textAlign: 'center',
        }}
      >
        <Container
            disableGutters
                sx={{
                
                maxWidth: {xs:'100%', md: 'md'}
            }}>
        {/* 상단 정보 컴포넌트 */}
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: { xs: 10, sm: 10, md: 10 }, 
            }}
            >
                <Typography
                    variant="body1"
                    component="div" // <div>로 렌더링되도록 설정
                    sx={{
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    }}
                >
                    Start your project
                    <br />
                    with Drft-AI
                </Typography>
                <Typography
                    variant="body1"
                    component="div" // <div>로 렌더링되도록 설정
                    sx={{
                    textAlign: 'right',
                    fontSize: '1rem',
                    }}
                >
                    Privacy Policy
                    <br />
                    hello@driftai.com
                </Typography>
            </Box>

        {/* 중앙 버튼 컴포넌트 */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: isDarkMode ? 'black' : 'white',
            color: isDarkMode ? 'white' : 'black',
            fontWeight: '500',
            fontFamily: 'Space Grotesk, Arial, sans-serif',
            fontSize: '16px',
            borderRadius: '9999px',
            minWidth: '283px',
            minHeight: '54px',
            mb: { xs: 10, sm: 10, md: 10 }, 
            '&:hover': {
              backgroundColor: isDarkMode ? 'gray.200' : 'gray.800',
            },
          }}
        >
          Beta Sign Up
        </Button>

        {/* 하단 로고 컴포넌트 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
        >
          <img src="/resource/DRFT-AI_Logo.svg"
          className={isDarkMode ?   "light-mode-logo" :"dark-mode-logo"}
           style={{ 
            width: '898px', 
            height: 'auto' 
            }} />
        </Box>
      </Container>
      </Box>
    )
}

export default Footer;