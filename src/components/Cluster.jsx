import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent
} from '@mui/material';

import consultoria from '../images/consultoria.png';
import seguridadinformacion from '../images/seguridadinformacion.png';
import infraestructura from '../images/infraestructura.png';
import brilliantickets from '../images/brilliantickets.png';
const Cluster = () => {

    return (
        <Box sx={{ px: { xs: 6, md: 8, mb: 4 }, py: 6, borderRadius: 4 }} >
            {/* Título y descripción */}
            <Grid
                container
                justifyContent="center"
                sx={{ textAlign: 'center', mb: 4 }}
            >
                <Grid item xs={12} md={8}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            background: 'linear-gradient(90deg, #9616afff, #2931a1ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '2px 2px 4px rgba(8, 0, 0, 0.1)',
                            cursor: 'default',
                        }}
                        gutterBottom
                    >
                        CLUSTER EVOLUTIVO
                    </Typography>



                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: '1000px',
                            lineHeight: 1.6,
                            fontWeight: 400,
                        }}
                    >
                        "La conectividad e infraestructura son elementos en una autopista dinámica,
                        que se orquestan entre varios actores, todos en sincronía, que garantizan
                        una correcta y segura fluidez de la información y los servicios".
                    </Typography>
                </Grid>
            </Grid>

            {/* Tarjetas */}
            <Grid container spacing={10} justifyContent="center">
                {/* Reusable Card Template */}
                {[
                    {
                        image: consultoria,
                        title: "CONSULTORÍA INTEGRAL EN TI",
                        description:
                            "Conectamos tendencias tecnológicas que respondan a sus objetivos comerciales entendiendo su sector económico, necesidades de transformación digital y entorno sociocultural, para entregar soluciones personalizadas.",

                    },
                    {
                        title: "INFRAESTRUCTURA EN TI",
                        description: "Proporcionarte infraestructura robusta y flexible que pueda crecer junto con tu empresa, respalde tus operaciones comerciales y asegure la continuidad del negocio con un soporte y mantenimiento continuo.",
                        image: infraestructura

                    },

                    {
                        title: "SEGURIDAD DE LA INFORMACIÓN",
                        description: "Protege la reputación de la organización y garantiza la confidencialidad, integridad y disponibilidad de la información, cumpliendo con regulaciones legales y estándares de la industria.",
                        image: seguridadinformacion

                    },
                    {
                        title: "BRILLIANTICKETS",
                        description: "Gestiona de manera eficiente y centralizada todos los Clientes externos e internos  y las solicitudes de tu equipo con el uso de herramientas y servicios tic de la compañía,  bajo un modelo ITSM.( Gestión de servicios de TI)",
                        image: brilliantickets
                    }







                ].map((card, index) => (
                    <Grid justifyContent={'center'} key={index}>
                        <Card
                            sx={{
                                borderRadius: 3,
                                boxShadow: 3,
                                width: '100%',
                                maxWidth: 350,
                                height: 320,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: 8,
                                },
                            }}
                        >

                            <CardContent
                                sx={{
                                    textAlign: 'center',
                                    display: 'flex',
                                    growflex: 1,
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={card.image}
                                    alt={card.title}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        objectFit: 'contain',
                                        mx: 'auto',
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'text.primary',
                                        lineHeight: 1.6,
                                        fontWeight: 400,
                                    }}
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"

                                    sx={{
                                        lineHeight: 1.6,
                                        fontWeight: 400,
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </Box >
    );
};

export default Cluster;
