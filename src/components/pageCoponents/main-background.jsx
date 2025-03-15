import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BackgroundWithGradients = ({ backgroundImage, topGradient, bottomGradient }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
  
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '1479px',
        mt: '250px',
        backgroundImage: `url(${backgroundImage})`, // 배경 이미지 설정
        backgroundSize: 'auto 100%', // 배경 이미지 크기 설정
        backgroundRepeat: 'no-repeat', // 배경 이미지 반복 설정
        backgroundPosition: 'center top', // 배경 이미지 위치 설정
        zIndex: 0, // 배경 이미지가 버튼 뒤에 표시되도록 설정
        opacity: 0.7, // 배경 이미지의 투명도 설정
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          mt: '-250px',
          backgroundImage: `url(${topGradient})`, // 상단 그라데이션 이미지 설정
          backgroundSize: 'cover', // 그라데이션 이미지 크기 설정
          backgroundRepeat: 'no-repeat', // 그라데이션 이미지 반복 설정
          backgroundPosition: 'top', // 그라데이션 이미지 위치 설정
          zIndex: 1, // 그라데이션 이미지가 배경 이미지 위에 표시되도록 설정
          
          opacity: 0.7, // 그라데이션 이미지의 투명도 설정
          filter: isDarkMode ? 'invert(1) blur(50px)' : 'blur(50px)', // 다크 모드일 때만 invert 필터 적용
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          mb: '10px',
          backgroundImage: `url(${bottomGradient})`, // 하단 그라데이션 이미지 설정
          backgroundSize: 'cover', // 그라데이션 이미지 크기 설정
          backgroundRepeat: 'no-repeat', // 그라데이션 이미지 반복 설정
          backgroundPosition: 'bottom', // 그라데이션 이미지 위치 설정
          zIndex: 1, // 그라데이션 이미지가 배경 이미지 위에 표시되도록 설정
          opacity: 1,
          filter: isDarkMode ? 'invert(1) blur(150px)' : 'blur(150px)', // 다크 모드일 때만 invert 필터 적용
        }}
      />
    </Box>
  );
};

export default BackgroundWithGradients;