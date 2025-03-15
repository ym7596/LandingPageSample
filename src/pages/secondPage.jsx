import React from "react"
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FeatureBox from "../components/FeatureBox";
const SecondPage = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Container
        disableGutters
         sx={{
            p:2,
            
            maxWidth: {xs:'100%', md: 'xl'},
           
        }}>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                fontWeight: 700, // 폰트 굵기 설정
                fontSize: '3.2rem', // 폰트 크기 설정
                
                textAlign: {xs: 'left', md:'center'}, // 텍스트 정렬 설정
                verticalAlign: 'middle', // 수직 정렬 설정
                
                
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                
                fontFamily: 'Space Grotesk, Arial, sans-serif',
                pl: {xs: 2, md: 0},
                }}
                >
                Try DRFT-1
                <br />
                Design System Automator
            </Typography>
            <Box
                sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // 모바일에서는 세로 정렬, 데스크탑에서는 가로 정렬
                justifyContent: 'center',
                alignItems: 'center',
                // 모바일에서는 4px, 데스크탑에서는 10px 간격
                mt: 10,
                
                }}
                >
               <FeatureBox
                title="Automated Tokens & Components"
                description="Simple tool to test out tokens and components to test designs in seconds."
                />
                <FeatureBox
                title="Design with AI (Coming Soon)"
                description="Use AI to describe what you need or provide reference images to complete design systems."
                />
                <FeatureBox
                title="Connect with Figma & Codebase (Coming Soon)"
                description="Centralized control through connecting Figma data and the product codebase."
                />
            </Box>
              <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '800px',
                    mt: { xs: -20,sm: 0, md: 15 },
                    backgroundImage: `url(${isDarkMode ? 
                        '/resource/Product_Hero_dark.png' : 
                        '/resource/Product_Hero_light.png'})`, // 테마에 따라 배경 이미지 설정
                   // 배경 이미지 크기 설정
                    backgroundSize: 'contain', // 배경 이미지 크기 설정
                    backgroundRepeat: 'no-repeat', // 배경 이미지 반복 설정
                    backgroundPosition: 'center', // 배경 이미지 위치 설정
                    // 배경 이미지의 투명도 설정
                }}
                />
                
        </Container>
    )
}

export default SecondPage;