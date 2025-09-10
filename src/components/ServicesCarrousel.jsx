import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    IconButton,
    useMediaQuery,
    ButtonBase,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import consultoria from '../images/1.png';
import infraestructura from '../images/2.png';
import internet from '../images/3.png';
import seguridad from '../images/4.png';
import software from '../images/5.png';
import brilliantickets from '../images/6.png';
import inteligencia from '../images/7.png';

const ServicesCarousel = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Todos los IDs son strings válidos para usar como id del DOM
    const services = [
        { id: 'consultoria', title: 'CONSULTORÍA INTEGRAL EN TI', image: consultoria },
        { id: 'infraestructura', title: 'INFRAESTRUCTURA FÍSICA Y OPERATIVA', image: infraestructura },
        { id: 'conectividad', title: 'CONECTIVIDAD', image: internet },
        { id: 'inteligencia', title: 'INTELIGENCIA ARTIFICIAL Y AUTOMATIZACIÓN', image: inteligencia },
        { id: 'seguridad', title: 'SEGURIDAD DE LA INFORMACIÓN', image: seguridad },
        { id: 'software', title: 'SOFTWARE', image: software },
        { id: 'brilliantickets', title: 'MESA DE AYUDA Y GESTIÓN DE SERVICIOS (ITSM)', image: brilliantickets },
    ];

    const visibleCount = isMobile ? 1 : 3;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const maxIndex = services.length - visibleCount;

    const getVisibleServices = () => {
        return services.slice(currentIndex, currentIndex + visibleCount);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, maxIndex]);

    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                py: 8,
                px: 2,
                textAlign: 'center',
                position: 'relative',
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    fontWeight: 'bold',
                    color: '#000000ff',
                    mb: 5,
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                }}
            >
                Nuestros servicios
            </Typography>

            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        left: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        backgroundColor: 'white',
                        boxShadow: 2,
                    }}
                >
                    <ArrowBackIos />
                </IconButton>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 6,

                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    {getVisibleServices().map((service) => (
                        <ButtonBase
                            key={service.id}
                            onClick={() => {
                                const el = document.getElementById(service.id);
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            sx={{
                                position: 'relative',
                                height: 400,
                                width: isMobile ? 200 : '30%',
                                borderRadius: 2,
                                overflow: 'hidden',
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'transform 0.3s',
                                cursor: 'pointer',
                                '&:hover .overlay': {
                                    opacity: 1,
                                },
                            }}
                        >
                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 800,
                                        px: 2,
                                        textAlign: 'center',
                                    }}
                                >
                                    {service.title}
                                </Typography>
                            </Box>
                        </ButtonBase>
                    ))}
                </Box>

                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        backgroundColor: 'white',
                        boxShadow: 2,
                    }}
                >
                    <ArrowForwardIos />
                </IconButton>
            </Box>

            {/* Indicators */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mt: 4,
                }}
            >
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? '#531983' : '#ccc',
                            cursor: 'pointer',
                            transition: 'transform 0.3s',
                            transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ServicesCarousel;
