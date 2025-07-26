import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Container,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import cliente1 from '../images/cliente1.png';
import cliente2 from '../images/cliente2.png';
import cliente3 from '../images/cliente3.png';
import cliente4 from '../images/cliente4.jpg';
import cliente6 from '../images/cliente6.png';
import cliente7 from '../images/cliente7.png';
import cliente8 from '../images/cliente8.png';
import cliente9 from '../images/cliente9.png';
import cliente10 from '../images/cliente10.png';

const ClientSlider = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const rawClients = [
        { id: 1, img: cliente1 },
        { id: 2, img: cliente2 },
        { id: 3, img: cliente3 },
        { id: 4, img: cliente4 },
        { id: 6, img: cliente6 },
        { id: 7, img: cliente7 },
        { id: 8, img: cliente8 },
        { id: 9, img: cliente9 },
        { id: 10, img: cliente10 }
    ];

    const itemsPerView = isMobile ? 2 : 3;
    const remainder = rawClients.length % itemsPerView;
    const fillerCount = remainder === 0 ? 0 : itemsPerView - remainder;

    const clients = [...rawClients, ...Array(fillerCount).fill(null)];
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = Math.max(0, clients.length - itemsPerView);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [maxIndex]);

    // Navegación manual
    const handlePrev = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    // Eventos de arrastre
    const [startX, setStartX] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [deltaX, setDeltaX] = useState(0);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (startX === null) return;
        setDeltaX(e.touches[0].clientX - startX);
    };

    const handleTouchEnd = () => {
        if (deltaX > 50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (deltaX < -50 && currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
        setStartX(null);
        setDeltaX(0);
    };

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        setDeltaX(e.clientX - startX);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        if (deltaX > 50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (deltaX < -50 && currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
        setIsDragging(false);
        setStartX(null);
        setDeltaX(0);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 600, color: '#2C3E50', mb: 4 }}>
                Muchos clientes confían en nuestro modelo de atención
            </Typography>

            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <IconButton onClick={handlePrev} sx={arrowStyles('left')}>
                    <ChevronLeft />
                </IconButton>
                <IconButton onClick={handleNext} sx={arrowStyles('right')}>
                    <ChevronRight />
                </IconButton>

                <Box
                    sx={{
                        display: 'flex',
                        transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
                        transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        cursor: isDragging ? 'grabbing' : 'grab'
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {clients.map((client, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: `0 0 ${100 / itemsPerView}%`,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2
                            }}
                        >
                            {client ? (
                                <Box
                                    sx={{
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                        width: '100%',
                                        height: 140,
                                        border: '1px solid #E0E0E0',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                            borderColor: '#5a35ff'
                                        }
                                    }}
                                >
                                    <img
                                        src={client.img}
                                        alt={`Cliente ${client.id}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            transition: 'all 1s ease'
                                        }}
                                    />
                                </Box>
                            ) : (
                                <Box sx={{ flex: 1 }} />
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? '#5a35ffff' : '#BDC3C7',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: index === currentIndex ? '#5a35ffff' : '#95A5A6'
                            }
                        }}
                    />
                ))}
            </Box>

            <Typography variant="body1" align="center" sx={{ mt: 4, color: '#7F8C8D', fontStyle: 'italic' }}>
                Únete a las múltiples empresas que confían en nuestra plataforma para crecer
            </Typography>
        </Container>
    );
};

const arrowStyles = (position) => ({
    position: 'absolute',
    top: '50%',
    [position]: 0,
    transform: 'translateY(-50%)',
    zIndex: 2,
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    '&:hover': {
        backgroundColor: '#f5f5f5',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }
});

export default ClientSlider;
