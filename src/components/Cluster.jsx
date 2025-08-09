import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Stack
} from '@mui/material';

import consultoria from '../images/consultoria.png';
import seguridadinformacion from '../images/seguridadinformacion.png';
import infraestructura from '../images/infraestructura.png';
import brilliantickets from '../images/brilliantickets.png';
import software from '../images/software.png';
import internet from '../images/internet.png';

const Cluster = () => {
    const cards = [
        {
            title: "CONSULTORÍA INTEGRAL EN TI",
            description: "Conectamos tendencias tecnológicas que respondan a sus objetivos comerciales entendiendo su sector económico, necesidades de transformación digital y entorno sociocultural, para entregar soluciones personalizadas.",
            features: ["Estandares de calidad", "Innovación"],
            image: consultoria,
            color: "#6a1b9a" // púrpura
        },
        {
            title: "INFRAESTRUCTURA FÍSICA Y OPERATIVA",
            description: "Diseño, instalación y mantenimiento de redes eléctricas, plantas, UPS, cableado estructurado y soportes técnicos para asegurar la continuidad operativa y el crecimiento escalable.",
            features: ["Mantenimiento", "Operación", "Diseño"],
            image: infraestructura,
            color: "#ad3894ff" // rosa
        },
        {
            title: "CONECTIVIDAD",
            description: "Servicios de internet dedicado, transporte de datos y redes (fibra, microondas, satelital, MPLS), con gestión centralizada y alta disponibilidad a nivel nacional.",
            features: ["Internet", "Red MPLS", "Satelital"],
            image: internet,
            color: "#2511d6ff" // azul
        },
        {
            title: "SEGURIDAD DE LA INFORMACIÓN",
            description: "Protege la reputación de la organización y garantiza la confidencialidad, integridad y disponibilidad de la información, cumpliendo con regulaciones legales y estándares de la industria.",
            features: ["Confidencialidad", "Normativas"],
            image: seguridadinformacion,
            color: "#c62828" // rojo
        },
        {
            title: "SOFTWARE",
            description: "Sea a la medida o como servicio flexible, iterativo y rápido, acompañamos el ciclo completo desde el diseño hasta la apropiación de los usuarios.",
            features: ["Desarrollo", "SaaS", "Automatización"],
            image: software,
            color: "#04728dff" // naranja
        },

        {
            title: "MESA DE AYUDA Y GESTIÓN DE SERVICIOS (ITSM)",
            description: "Gestión centralizada de soporte técnico con Brilliantickets: atención a clientes internos y externos, monitoreo de indicadores, soporte remoto y presencial.",
            features: ["Soporte", "Brilliantickets", "KPI"],
            image: brilliantickets,
            color: "#30886bff" // café oscuro
        }
    ];


    return (
        <Box id="cluster" sx={{ px: { xs: 4, md: 8 }, py: 6, borderRadius: 4 }}>
            {/* Título y descripción */}
            <Grid container justifyContent="center" sx={{ textAlign: 'center', mb: 4 }}>
                <Grid item xs={12} md={8}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            background: 'black',
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
            <Grid container spacing={4} justifyContent="center">
                {cards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                borderRadius: 3,
                                boxShadow: 4,
                                maxWidth: 360,
                                minHeight: 360,
                                mx: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: 10,
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
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
                                        fontWeight: 600,
                                        mb: 1,
                                    }}
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.5,
                                        textAlign: 'justify',
                                        fontWeight: 400,
                                        mb: 2,
                                    }}
                                >
                                    {card.description}
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
                                    {card.features.map((f, idx) => (
                                        <Chip
                                            key={idx}
                                            label={f}
                                            size="medium"
                                            variant="outlined"
                                            sx={{
                                                bgcolor: `${card.color}10`,
                                                color: card.color,
                                                fontSize: "15px",
                                                border: `1px solid ${card.color}30`,
                                            }}
                                        />
                                    ))}
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Cluster;
