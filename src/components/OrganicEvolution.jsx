import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    Container,
    useTheme,
    useMediaQuery
} from '@mui/material';

import thumbnail from '../images/preview.jpeg'; // Usa aquí la imagen que subiste

const OrganicEvolution = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Grid container spacing={4} alignItems="center">
                {/* Imagen con botón play */}


                {/* Texto + Botones */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            color: '#1e1e1e',
                            mb: 2,
                            textAlign: isMobile ? 'center' : 'left',
                        }}
                    >
                        EVOLUCIÓN ORGÁNICA
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: '#4b4b4b',
                            mb: 3,
                            fontSize: 18,
                            lineHeight: 1.7,
                            textAlign: isMobile ? 'center' : 'left',
                        }}
                    >
                        Nuestro equipo, compuesto por talentosos
                        y experimentados profesionales, se dedica
                        proporcionar a las organizaciones las
                        capacidades, herramientas y métodos
                        necesarios para armonizar y potenciar su
                        competitividad y desarrollo económico. Con
                        nuestra visión de transformación, tu
                        organización no solo crecerá, sino que tambien se convertirá en un referente de innovación y éxito en su sector.
                    </Typography>



                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            borderRadius: 4,
                            overflow: 'hidden',
                            boxShadow: 3,
                        }}
                    >
                        <img
                            src={thumbnail}
                            alt="Video presentación"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                borderRadius: '50%',
                                width: 64,
                                height: 64,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                transition: '0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,1)',
                                    transform: 'translate(-50%, -50%) scale(1.05)',
                                }
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    width: 0,
                                    height: 0,
                                    borderTop: '12px solid transparent',
                                    borderBottom: '12px solid transparent',
                                    borderLeft: '18px solid #f25c05',
                                }}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrganicEvolution;
