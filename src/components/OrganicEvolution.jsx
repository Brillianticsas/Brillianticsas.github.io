import React from 'react';
import {
    Box,
    Container,
    Typography,
    Slide,
    Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import evolution from '../images/evolution.jpg';

// eslint-disable-next-line no-empty-pattern
const SectionWrapper = styled(Box)(({ }) => ({
    minHeight: '50vh',
    display: 'flex',
    padding: '70px',
    alignItems: 'center',
}));

const GradientText = styled('span')(() => ({
    color: '#602391ff',
    position: 'relative',

}));

const StyledImage = styled('img')(() => ({
    width: '600px',
    height: '400px',
    maxHeight: '550px',
    borderRadius: '12px',
    position: 'relative',
    transition: 'transform 0.3s ease-in-out',
    objectFit: 'cover',
    boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.15)',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const OrganicEvolution = () => {
    return (
        <SectionWrapper>
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={4}
                >

                    {/* Left Column - Text */}
                    <Box flex={1} maxWidth={{ md: '60%' }}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Slide direction="right" in timeout={800}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        lineHeight: 1.2,
                                        color: 'text.primary',
                                    }}
                                >
                                    EVOLUCIÓN ORGÁNICA
                                </Typography>
                            </Slide>

                            <Fade in timeout={1000}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        maxWidth: '600px',
                                        lineHeight: 1.5,
                                        fontSize: 18,
                                    }}
                                >
                                    Nuestro equipo, compuesto por talentosos y experimentados profesionales, se dedica a proporcionar a las organizaciones las capacidades, herramientas y métodos necesarios para armonizar y potenciar su competitividad y desarrollo económico. Con nuestra visión de transformación, tu organización no solo crecerá, sino que también se convertirá en un referente de innovación y éxito en su sector.
                                </Typography>
                            </Fade>
                        </Box>

                    </Box>
                    {/* Right Column - Image */}
                    <Slide direction="left" in timeout={1000}>
                        <Box flex={1} mt={{ xs: 8, md: 0 }} pl={{ md: 6 }} >
                            <StyledImage src={evolution} alt="Equipo de trabajo" />
                        </Box>
                    </Slide>

                </Box>
            </Container>
        </SectionWrapper>
    );
};

export default OrganicEvolution;
