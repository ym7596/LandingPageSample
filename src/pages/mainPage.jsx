import React,{useState} from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
    <Box sx={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      minHeight: 'calc(150vh + 250px)'
    }}> 
        <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          mt: '250px',
          backgroundImage:  `url(${isDarkMode ? backgroundImages.dark[colorIndex] : backgroundImages.light[colorIndex]})`, // 그라데이션과 배경 이미지 설정
          backgroundSize: 'auto 100%', // 배경 이미지 크기 설정
          backgroundRepeat: 'no-repeat', // 배경 이미지 반복 설정
          backgroundPosition: 'center top', // 배경 이미지 위치 설정
          zIndex: 0, // 배경 이미지가 버튼 뒤에 표시되도록 설정
          opacity: 0.7,
         // 배경 이미지의 투명도 설정
        }}
      />
        <Box sx={{
          position: 'relative', 
          zIndex: 1, 
          minHeight: '50vh',
          
          }}>
          <MainTitle onButtonCallback={onButtonCallback} onColorPickerCallback={onColorPickerCallback} />
        </Box>
   
    </Box>
  );
};

export default MainPage;