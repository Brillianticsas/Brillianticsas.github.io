import React from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Chip,
    Fade,
    Slide,
    Grow
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const HeroSection = styled(Box)(() => ({
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
}));

const GradientText = styled('span')(() => ({
    color: '#602391ff',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: '#261038',
        opacity: 0.6,
    },
}));


const SubmitButton = styled(Button)(() => ({
    borderRadius: '12px',
    padding: '16px 32px',
    minWidth: 'auto',
    backgroundColor: '#602391ff',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#261038',
        boxShadow: '0 8px 25px rgba(38, 16, 56, 0.2)',
        transform: 'translateY(-1px)',
    },
    '&:active': {
        transform: 'scale(0.95)',
    },
    transition: 'all 0.2s ease-in-out',
}));


const HeroImage = styled('img')(() => ({
    width: '700px',
    height: '400px',
    maxHeight: '550px',
    borderRadius: '12px',
    transition: 'transform 0.3s ease-in-out',
    objectFit: 'cover',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const Hero = () => {
    return (
        <HeroSection>
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={4}
                >
                    {/* Left Column */}
                    <Box flex={1} maxWidth={{ md: '50%' }}>
                        <Box display="flex" flexDirection="column" gap={4}>
                            <Slide direction="right" in timeout={800}>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                                        fontWeight: 'bold',
                                        lineHeight: 1.2,
                                        color: 'text.primary',
                                    }}
                                >
                                    SOMOS <br />
                                    AGENTES DE{' '}
                                    <GradientText>TRANSFORMACIÓN</GradientText>
                                </Typography>
                            </Slide>

                            <Fade in timeout={1000}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'text.secondary',
                                        maxWidth: '600px',
                                        lineHeight: 1.6,
                                        fontWeight: 400,
                                    }}
                                >
                                    Enfocamos nuestro talento con la visión de crecimiento y transformación de nuestros clientes
                                    para armonizar y potenciar lo que mejor saben hacer.
                                </Typography>
                            </Fade>

                            <Grow in timeout={1200}>
                                <Box display="flex" gap={1.5} maxWidth="400px">
                                    <ScrollLink to="contacto" smooth={true} duration={500}>
                                        <SubmitButton
                                            variant="contained"
                                        >
                                            Contáctanos
                                        </SubmitButton>
                                    </ScrollLink>
                                </Box>
                            </Grow>
                        </Box>
                    </Box>

                    {/* Right Column - Image */}
                    <Slide direction="left" in timeout={1000}>
                        <Box
                            flex={1}
                            mt={{ xs: 8, md: 0 }}
                            pl={{ md: 6 }}
                        >
                            <Box >
                                <HeroImage
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                                    alt="Team meeting"
                                />
                            </Box>
                        </Box>
                    </Slide>
                </Box>
            </Container>
        </HeroSection>
    );
};

export default Hero;
