import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    Paper,
    Slide,
    Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Estilos reutilizables
const SectionWrapper = styled(Box)(() => ({
    minHeight: '50vh',
    display: 'flex',
    padding: '20px 20px',
    alignItems: 'center',
    backgroundColor: '#fff',
}));

const CarouselCard = styled(Paper)(() => ({
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    position: 'relative',
    minHeight: '360px',
}));

const IndicatorDot = styled(Box)(({ active }) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: active ? '#00adef' : '#ccc',
}));

const ServicesCard = ({ title, subtitle, description, items, carouselPosition = "right" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    return (
        <SectionWrapper>
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    flexDirection={{
                        xs: 'column',
                        md: carouselPosition === "right" ? 'row' : 'row-reverse'
                    }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={4}
                >
                    {/* Texto */}
                    <Box flex={1} maxWidth={{ md: '60%' }}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Slide direction={carouselPosition === "right" ? "right" : "left"} in timeout={800}>
                                <Typography
                                    variant="h4"

                                    sx={{
                                        mt: 2,

                                        fontWeight: 'bold',
                                        color: '#31177aff',
                                    }}
                                >
                                    {title}
                                </Typography>
                            </Slide>

                            {subtitle && (
                                <Fade in timeout={1000}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ color: '#007cc2' }}
                                    >
                                        {subtitle}
                                    </Typography>
                                </Fade>
                            )}

                            <Fade in timeout={1200}>
                                <Typography
                                    variant="body1"
                                    sx={{ whiteSpace: "pre-wrap", color: 'text.secondary', fontSize: 16 }}
                                >
                                    {description}
                                </Typography>
                            </Fade>
                        </Box>
                    </Box>

                    {/* Carrusel */}
                    <Box flex={1} pl={{ md: carouselPosition === "right" ? 6 : 0 }} pr={{ md: carouselPosition === "left" ? 6 : 0 }}>
                        <Slide direction={carouselPosition === "right" ? "left" : "right"} in timeout={1000}>
                            <Box position="relative">
                                <CarouselCard>
                                    <Box
                                        component="img"
                                        src={items[currentIndex].image}
                                        alt={items[currentIndex].name}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            objectFit: 'contain',
                                            mb: 2,
                                            mx: 'auto',
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 'bold', color: '#4f1e8fff' }}
                                    >
                                        {items[currentIndex].name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ mt: 1, color: 'text.secondary' }}
                                    >
                                        {items[currentIndex].description}
                                    </Typography>
                                    {/* Indicadores */}
                                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 1 }}>
                                        {items.map((_, i) => (
                                            <IndicatorDot key={i} active={i === currentIndex} />
                                        ))}
                                    </Box>
                                </CarouselCard>

                                {/* Flechas */}
                                <IconButton
                                    onClick={handlePrev}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: -20,
                                        transform: 'translateY(-50%)',
                                        bgcolor: '#4ec2e7',
                                        color: '#fff',
                                        '&:hover': { bgcolor: '#34a7cc' }
                                    }}
                                >
                                    <ArrowBackIos fontSize="small" />
                                </IconButton>
                                <IconButton
                                    onClick={handleNext}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: -20,
                                        transform: 'translateY(-50%)',
                                        bgcolor: '#4ec2e7',
                                        color: '#fff',
                                        '&:hover': { bgcolor: '#34a7cc' }
                                    }}
                                >
                                    <ArrowForwardIos fontSize="small" />
                                </IconButton>


                            </Box>
                        </Slide>
                    </Box>
                </Box>
            </Container>
        </SectionWrapper>
    );
};

export default ServicesCard;
