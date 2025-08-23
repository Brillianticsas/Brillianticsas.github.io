import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';

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

    const clients = [
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

    // duplicamos la lista para scroll infinito
    const doubledClients = [...clients, ...clients];

    const sliderRef = useRef(null);
    const positionRef = useRef(0);

    useEffect(() => {
        let animationFrameId;
        const speed = 1; // píxeles por frame (~30px/s si 60fps)

        const animate = () => {
            positionRef.current -= speed;

            if (sliderRef.current) {
                const sliderWidth = sliderRef.current.scrollWidth / 2; // ancho de una lista completa
                if (Math.abs(positionRef.current) >= sliderWidth) {
                    positionRef.current = 0; // reinicio para loop
                }
                sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const itemsPerView = isMobile ? 2 : 3;

    return (
        <Container maxWidth="lg" sx={{ py: 6, overflow: 'hidden' }}>
            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 600, color: '#2C3E50', mb: 4 }}
            >
                Muchos clientes confían en nuestro modelo de atención
            </Typography>

            <Box sx={{ overflow: 'hidden', width: '100%' }}>
                <Box
                    ref={sliderRef}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        transition: 'none', // animación controlada por JS
                    }}
                >
                    {doubledClients.map((client, index) => (
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
                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    borderRadius: 2,
                                    width: '100%',
                                    height: 140,
                                    border: '1px solid #E0E0E0',
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
                                        objectFit: 'contain'
                                    }}
                                />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Typography
                variant="body1"
                align="center"
                sx={{ mt: 4, color: '#7F8C8D', fontStyle: 'italic' }}
            >
                Únete a las múltiples empresas que confían en nuestra plataforma para crecer
            </Typography>
        </Container>
    );
};

export default ClientSlider;
