import React,{useEffect, useState} from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const colorPalettes = [
    'linear-gradient(100deg, #FFFFFF 0%, #276EF1 100%)',
    'linear-gradient(90deg, #FFFFFF 0%, #C6493C 90%)',
    'linear-gradient(90deg, #000000 0%, #276EF1 90%)',
    'linear-gradient(90deg, #000000 0%, #C6493C 90%)',
  ];

const MainTitle = ({onButtonCallback, onColorPickerCallback}) => {
    const theme = useTheme();
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

        useEffect(() => {
        // 컴포넌트가 마운트될 때 첫 번째 색상을 선택
        onColorPickerCallback(selectedColorIndex);
    }, [onColorPickerCallback, selectedColorIndex]);

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        onColorPickerCallback(index);
    };
  
    return (
    <Box
      sx={{
        textAlign: 'center',
        p: 2,
        maxWidth: '5xl',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
        <Box>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                fontWeight: 700, // 폰트 굵기 설정
                fontSize: '3.75rem', // 폰트 크기 설정
                
                textAlign: 'center', // 텍스트 정렬 설정
                verticalAlign: 'middle', // 수직 정렬 설정
                
                mb: 4,
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                mx: 'auto',
                fontFamily: 'Space Grotesk, Arial, sans-serif',
                
                }}
            >
                Design Systems
                <br />
                Fully Accelerated
            </Typography>
            <Typography
                variant="body1"
                sx={{
                fontSize: '1.125rem', // 폰트 크기 설정
                textAlign: 'center', // 텍스트 정렬 설정
                verticalAlign: 'middle', // 수직 정렬 설정
                mb: 4,
                maxWidth: '2xl',
                mx: 'auto',
                
                color: theme.palette.mode === 'dark' ? 'gray.200' : 'gray.800',
                }}
            >
                DRFT-AI streamlines the creation of frontend components and
                <br />
                design systems. Instantly iterate designs—refine, and explore
                <br />
                variations without rewriting code.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
                color: theme.palette.mode === 'dark' ? 'black' : 'white',
                px: 8,
                py: 3,
                width: '100%',
                maxWidth: '184px',
                maxHeight: '48px',
                borderRadius: '9999px',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? 'gray.200' : 'gray.800',
                },
                transition: 'background-color 0.3s',
                fontSize: 14,
                whiteSpace: 'nowrap',
                
              }}
              onClick={onButtonCallback}
            >
              Get Started
            </Button>
            <Box
            sx={{
                mt: 65,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
                color: theme.palette.mode === 'dark' ? 'black' : 'white',
                borderRadius: '9999px',
                py: 1,
                maxWidth: '400px',
                mx: 'auto',
                
                
                }}
                >
                <Typography
                    variant="body1"
                    sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    mr: 2,
                    }}
                >
                    Samples
                </Typography>
                {colorPalettes.map((gradient, index) => (
                <Button
                key={index}
                onClick={() => handleColorClick(index)}
                sx={{
                    background: gradient,
                    width: '40px',
                    height: '20px',
                    borderRadius: '9999px',
                    mx: 0.5,
                    opacity: selectedColorIndex === index ? 1 : 0.5,
                    '&:hover': {
                    opacity: 1,
                    },
                }}
                    />
                ))}
            </Box>
        </Box>
    </Box>
    );
}

export default MainTitle;