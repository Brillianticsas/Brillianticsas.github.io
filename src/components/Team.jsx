import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    IconButton,
    useTheme,
    Avatar
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const teamMembers = [
    {
        name: 'Jorge Antonio Valencia',
        role: 'Gerente General',
        description: 'Fundador con más de 10 años de experiencia en tecnología.',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        name: 'John Alexander Mora',
        role: 'Asesor Comercial',
        description: 'Apasionado por la innovación y el desarrollo de software.',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
        name: 'Luisa Fernanda Piamba',
        role: 'Lider Administrativa',
        description: 'Diseñador centrado en mejorar la experiencia del usuario.',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        name: 'Frand Lebaza',
        role: 'Desarrollador Full Stack',
        description: 'Encargado del desarrollo del frontend y backend.',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        name: 'Jose Dario Vargas',
        role: 'Tester QA',
        description: 'Responsable de asegurar la calidad del producto final.',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    }
];

const TeamSection = () => {
    const theme = useTheme();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) setSlidesPerView(1);
            else if (window.innerWidth < 960) setSlidesPerView(2);
            else setSlidesPerView(3);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        if (currentSlide < teamMembers.length - slidesPerView) {
            setCurrentSlide(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    const styles = {
        section: {
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(4, 4),
        },
        header: {
            marginBottom: theme.spacing(6),
            textAlign: 'center',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#412359',
            position: 'relative',
            display: 'inline-block',
            '&::after': {
                content: '""',
                position: 'absolute',
                width: '50%',
                height: '4px',
                backgroundColor: '#412359',
                bottom: '-10px',
                left: '25%',
            }
        },

        carouselContainer: {
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '16px',
        },
        slidesWrapper: {
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
            gap: theme.spacing(3),
        },
        slide: {
            flex: '0 0 25%',
            boxSizing: 'border-box',
            padding: theme.spacing(1),
        },
        card: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: '16px',
            paddingTop: theme.spacing(3), // Adjusted padding top for avatar
            boxShadow: theme.shadows[4],
            border: `1px solid ${theme.palette.grey[300]}`,
            display: 'flex', // Use flexbox for centering
            flexDirection: 'column',
            justifyContent: 'center', // Center content vertically
            alignItems: 'center', // Center content horizontally
            textAlign: 'center', // Center text content
            // Add transitions for smooth hover effects
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',

            // Hover effects
            '&:hover': {
                backgroundColor: '#412359',
                boxShadow: theme.shadows[8],
                '& .MuiTypography-root': {
                    color: theme.palette.common.white,
                    transition: 'color 0.3s ease',
                },
                '& .MuiAvatar-root': {
                    transform: 'scale(1.1)',
                    boxShadow: theme.shadows[4],
                },
            },

        },
        avatar: {
            width: 100,
            height: 100,
            border: `4px solid ${theme.palette.background.paper}`,
            boxShadow: theme.shadows[2],
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for zoom
        },
        cardContent: {
            textAlign: 'center',
            width: '100%',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: theme.spacing(4),
            gap: theme.spacing(2),
        }
    };

    return (
        <Box sx={styles.section}>
            <Container>
                <Typography variant="h3" component="h2" sx={styles.header}>
                    Nuestro Equipo
                </Typography>


                <Box sx={styles.carouselContainer}>
                    <Box sx={styles.slidesWrapper}>
                        {teamMembers.map((member, index) => (
                            <Box key={index} sx={styles.slide}>
                                <Card sx={styles.card}>
                                    <Avatar
                                        alt={member.name}
                                        src={member.image}
                                        sx={styles.avatar}
                                    />
                                    <CardContent sx={styles.cardContent}>
                                        <Typography variant="h6" gutterBottom>
                                            {member.name}
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                                            {member.role}
                                        </Typography>
                                        <Typography variant="body2">
                                            {member.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={styles.buttons}>
                    <IconButton onClick={handlePrev} disabled={currentSlide === 0}>
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton
                        onClick={handleNext}
                        disabled={currentSlide >= teamMembers.length - slidesPerView}
                    >
                        <ArrowForwardIos />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};

export default TeamSection;