import React from 'react';
import { Box, Typography } from '@mui/material';

const FeatureBox = ({ title, description }) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '220px' }, // Figma에서 제공한 너비
        height: '96px', // Figma에서 제공한 높이
        textAlign: { xs: 'left', md: 'center' }, // Figma에서 제공한 텍스트 정렬
        mb: { xs: 8, md: 10 },
        gap: '8px', // Figma에서 제공한 간격
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: { xs: 'left', md: 'center' }, 
        
        borderRadius: '8px', // 필요에 따라 모서리 둥글게
        padding: '16px', // 필요에 따라 패딩 추가
      }}
    >
      <Typography variant="h6" 
      sx={{ 
        fontWeight: 'bold 700',
        fontFamily: 'Space Grotesk, Arial, sans-serif',
        fontSize: { xs: '20px', md: '16px' },
        }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ 
        fontWeight: 400,
        color: 'gray', 
        fontSize: { xs: '18px', md: '16px' },  
        fontFamily: 'Space Grotesk, Arial, sans-serif', }}>
        {description}
      </Typography>
    </Box>
  );
};

export default FeatureBox;