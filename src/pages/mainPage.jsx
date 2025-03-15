import React,{useState} from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import BackgroundWithGradients from '../components/pageCoponents/main-background';
import MainTitle from '../components/pageCoponents/main-title';

const backgroundImages = {
  light: [
    '/resource/Home_Hero_1_light.png', // Light 모드, 색상 0번
    '/resource/Home_Hero_2_light.png', // Light 모드, 색상 1번
    '/resource/Home_Hero_1_light.png', // Light 모드, 색상 0번
    '/resource/Home_Hero_2_light.png', // Light 모드, 색상 1번
  ],
  dark: [
    '/resource/Home_Hero_1_dark.png', // Dark 모드, 색상 0번
    '/resource/Home_Hero_2_dark.png', // Dark 모드, 색상 1번
   '/resource/Home_Hero_1_dark.png', // Dark 모드, 색상 0번
    '/resource/Home_Hero_2_dark.png', // Dark 모드, 색상 1번
  ],
};

const topGradient = '/resource/top_gradient.png'; // 상단 그라데이션 이미지
const bottomGradient = '/resource/bottom_gradient.png'; // 하단 그라데이션 이미지



const MainPage = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [colorIndex, setColorIndex] = useState(0);

 

  const onButtonCallback = () => {
    // 버튼 클릭 시 콜백 함수
    console.log('Button Clicked!');
  }

  const onColorPickerCallback = (color) => {
    // 색상 선택 시 콜백 함수
    setColorIndex(color);
  }


  return (
    <Box
    sx={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      minHeight: 'calc(100vh)',
      height: '150vh',
    }}
  >
    <BackgroundWithGradients
      backgroundImage={isDarkMode ? backgroundImages.dark[colorIndex] : backgroundImages.light[colorIndex]}
      topGradient={topGradient}
      bottomGradient={bottomGradient}
    />
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 2, // MainTitle이 백그라운드 이미지 위에 오도록 설정
        minHeight: '100vh',
      
      }}
    >
      <MainTitle onButtonCallback={onButtonCallback} onColorPickerCallback={onColorPickerCallback} />
    </Box>
  </Box>
  );
};

export default MainPage;