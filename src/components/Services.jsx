import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Paper,
    Chip,
    LinearProgress,
    Divider,
    Rating,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkIcon from "@mui/icons-material/Work";

const services = [

    {
        title: "Infraestructura y Conectividad",
        description: "Diseñamos y operamos infraestructuras de red robustas que aseguran una conectividad fluida y segura para tu operación empresarial.",
        icon: <LanguageIcon sx={{ fontSize: 24 }} />,
        color: "#1976d2",
        gradient: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
        popularity: 95,
        features: ["Redes eléctricas", "Wifi empresarial", "Seguridad electrónica"],
        rating: 4.9,
    },
    {
        title: "Conectividad Empresarial",
        description: "Servicios dedicados de Internet y transporte de datos en fibra óptica simétrica, garantizando alta disponibilidad y velocidad.",
        icon: <CloudIcon sx={{ fontSize: 24 }} />,
        color: "#0097a7",
        gradient: "linear-gradient(135deg, #0097a7 0%, #006064 100%)",
        popularity: 88,
        features: ["Fibra óptica dedicada", "Transporte de datos", "Capas 2 y 3"],
        rating: 4.7,
    },
    {
        title: "Desarrollo de Aplicaciones",
        description: "Apps nativas y multiplataforma centradas en la experiencia del usuario, desarrolladas con tecnologías modernas y eficientes.",
        icon: <PhoneIphoneIcon sx={{ fontSize: 24 }} />,
        color: "#f57c00",
        gradient: "linear-gradient(135deg, #f57c00 0%, #ef6c00 100%)",
        popularity: 92,
        features: ["Flutter", "React Native", "Swift"],
        rating: 4.9,
    },
    {
        title: "Desarrollo Backend y Arquitecturas",
        description: "Diseño y desarrollo de APIs robustas y escalables con arquitecturas modernas, seguras y listas para integraciones complejas.",
        icon: <CodeIcon sx={{ fontSize: 24 }} />,
        color: "#7b1fa2",
        gradient: "linear-gradient(135deg, #7b1fa2 0%, #6a1b9a 100%)",
        popularity: 89,
        features: ["Node.js", "Python", "Arquitectura de microservicios"],
        rating: 4.7,
    },
    {
        title: "Infraestructura en la Nube",
        description: "Servicios en la nube optimizados para alto rendimiento, escalabilidad y seguridad, con tecnologías líderes como AWS y Azure.",
        icon: <CloudIcon sx={{ fontSize: 24 }} />,
        color: "#d32f2f",
        gradient: "linear-gradient(135deg, #d32f2f 0%, #c62828 100%)",
        popularity: 84,
        features: ["AWS", "Azure", "Docker"],
        rating: 4.8,
    },
    {
        title: "Mesa de Servicio y HelpDesk",
        description: "Atención centralizada de incidentes y solicitudes bajo el modelo ITSM, con monitoreo de KPI y soporte remoto especializado.",
        icon: <WorkIcon sx={{ fontSize: 24 }} />,
        color: "#0288d1",
        gradient: "linear-gradient(135deg, #0288d1 0%, #0277bd 100%)",
        popularity: 82,
        features: ["Modelo ITSM", "Soporte remoto", "Monitoreo de KPI"],
        rating: 4.7,
    }
];

const Services = () => (
    <Box id="services" sx={{ p: 2 }}>
        {/* TÍTULO */}
        <Typography
            variant="h5"
            align="center"
            sx={{ mb: 3, fontWeight: 600 }}
        >
            Nuestros Servicios
        </Typography>
        <Grid container spacing={2} justifyContent="center">
            {services.map((service, i) => (
                <Grid
                    item
                    // Ajusta el número de columnas; aquí en XL ocuparán 2/12 (~16%), en MD 3/12 (~25%)
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    key={i}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Card
                        sx={{
                            // Ya no tiene height fija
                            maxWidth: 280,            // ancho máximo
                            width: "100%",            // escalar al 100% de su contenedor
                            borderRadius: 4,
                            background: "#fff",
                            border: "1px solid #eee",
                            display: "inline-flex",   // para adaptarse al contenido
                            flexDirection: "column",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                            },
                        }}
                    >
                        <CardHeader
                            avatar={
                                <Paper
                                    elevation={4}
                                    sx={{
                                        p: 1,
                                        borderRadius: 3,
                                        background: service.gradient,
                                        color: "#fff",
                                    }}
                                >
                                    {service.icon}
                                </Paper>
                            }
                            title={
                                <>
                                    <Typography variant="subtitle1" fontWeight={700}>
                                        {service.title}
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                        <Rating
                                            value={service.rating}
                                            precision={0.1}
                                            readOnly
                                            size="small"
                                        />
                                        <Typography variant="caption" fontWeight={600}>
                                            {service.rating}
                                        </Typography>
                                    </Box>
                                </>
                            }
                            sx={{ pb: 0 }}
                        />

                        <CardContent sx={{ pt: 1, px: 2, pb: 2 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: "#555", mb: 1, lineHeight: 1.4 }}
                            >
                                {service.description}
                            </Typography>

                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
                                {service.features.map((f, idx) => (
                                    <Chip
                                        key={idx}
                                        label={f}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            bgcolor: `${service.color}10`,
                                            color: service.color,
                                            fontSize: "0.7rem",
                                            border: `1px solid ${service.color}30`,
                                        }}
                                    />
                                ))}
                            </Box>

                            <Divider sx={{ my: 1 }} />

                            <Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 0.5,
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                        <TrendingUpIcon sx={{ fontSize: 16, color: service.color }} />
                                        <Typography variant="caption" fontWeight={600}>
                                            Demanda
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="caption"
                                        fontWeight={700}
                                        color={service.color}
                                    >
                                        {service.popularity}%
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={service.popularity}
                                    sx={{
                                        height: 6,
                                        borderRadius: 3,
                                        backgroundColor: `${service.color}15`,
                                        "& .MuiLinearProgress-bar": {
                                            borderRadius: 3,
                                            background: service.gradient,
                                        },
                                    }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default Services;