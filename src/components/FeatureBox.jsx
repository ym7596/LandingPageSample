import React from 'react';
import { Box, Typography } from '@mui/material';

const FeatureBox = ({ title, description }) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '220px' }, // Figma에서 제공한 너비
        height: '96px', // Figma에서 제공한 높이
        textAlign: 'center',
        mb: { xs: 4, md: 0 },
        gap: '8px', // Figma에서 제공한 간격
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        borderRadius: '8px', // 필요에 따라 모서리 둥글게
        padding: '16px', // 필요에 따라 패딩 추가
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'gray' }}>
        {description}
      </Typography>
    </Box>
  );
};

export default FeatureBox;