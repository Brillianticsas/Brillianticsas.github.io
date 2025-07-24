import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Avatar,
    Chip,
    LinearProgress,
    Divider,
    Paper,
    IconButton,
    Rating,
    Badge,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import SensorsIcon from "@mui/icons-material/Sensors";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WorkIcon from "@mui/icons-material/Work";

const services = [
    {
        title: "Desarrollo Web",
        description: "Aplicaciones modernas, responsivas y accesibles con las últimas tecnologías.",
        icon: <LanguageIcon sx={{ fontSize: 28 }} />,
        color: "#1976d2",
        gradient: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
        popularity: 95,
        features: ["React", "Next.js", "TypeScript"],
        rating: 4.9,
        projects: "120+ proyectos",
        accent: "#e3f2fd"
    },

    {
        title: "Aplicaciones Móviles",
        description: "Apps nativas y multiplataforma centradas en la experiencia del usuario.",
        icon: <PhoneIphoneIcon sx={{ fontSize: 28 }} />,
        color: "#f57c00",
        gradient: "linear-gradient(135deg, #f57c00 0%, #ef6c00 100%)",
        popularity: 92,
        features: ["React Native", "Flutter", "Swift"],
        rating: 4.9,
        projects: "80+ apps",
        accent: "#fff3e0"
    },
    {
        title: "Desarrollo Backend",
        description: "APIs robustas y escalables con arquitecturas modernas y seguras.",
        icon: <CodeIcon sx={{ fontSize: 28 }} />,
        color: "#7b1fa2",
        gradient: "linear-gradient(135deg, #7b1fa2 0%, #6a1b9a 100%)",
        popularity: 89,
        features: ["Node.js", "Python", "GraphQL"],
        rating: 4.7,
        projects: "200+ APIs",
        accent: "#f3e5f5"
    },
    {
        title: "Servicios Cloud",
        description: "Infraestructura en la nube optimizada para rendimiento y escalabilidad.",
        icon: <CloudIcon sx={{ fontSize: 28 }} />,
        color: "#d32f2f",
        gradient: "linear-gradient(135deg, #d32f2f 0%, #c62828 100%)",
        popularity: 84,
        features: ["AWS", "Azure", "Docker"],
        rating: 4.8,
        projects: "60+ deployments",
        accent: "#ffebee"
    },

    {
        title: "HelpDesk & Mesa de Servicio",
        description: "Gestión eficiente y centralizada de incidentes y solicitudes con modelo ITSM.",
        icon: <WorkIcon sx={{ fontSize: 28 }} />,
        color: "#0288d1",
        gradient: "linear-gradient(135deg, #0288d1 0%, #0277bd 100%)",
        popularity: 82,
        features: ["ITSM", "Monitoreo KPI", "Atención Remota"],
        rating: 4.7,
        projects: "300+ tickets diarios",
        accent: "#e1f5fe"
    },

    {
        title: "Conectividad Empresarial",
        description: "Servicios dedicados de internet y transporte de datos en fibra óptica simétrica.",
        icon: <CloudIcon sx={{ fontSize: 28 }} />,
        color: "#0097a7",
        gradient: "linear-gradient(135deg, #0097a7 0%, #006064 100%)",
        popularity: 88,
        features: ["Fibra óptica", "Transporte de datos", "Capas 2 y 3"],
        rating: 4.7,
        projects: "50+ redes empresariales",
        accent: "#e0f7fa"
    },
];


const Services = () => {
    return (
        <Box
            id="services"
            sx={{
                py: 12,
                px: { xs: 2, md: 6 },
                background: "linear-gradient(135deg, #4d5ca0ff 0%, #1b0c2bff 100%)",
                minHeight: "100vh",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background decorative elements */}
            <Box
                sx={{
                    position: "absolute",
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: -150,
                    left: -150,
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.03)",
                    zIndex: 0,
                }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
                {/* Header Section */}
                <Box sx={{ textAlign: "center", mb: 10 }}>
                    <Chip
                        label="SERVICIOS PROFESIONALES"
                        sx={{
                            mb: 4,
                            bgcolor: "rgba(255,255,255,0.2)",
                            color: "white",
                            fontWeight: 700,
                            px: 4,
                            py: 2,
                            fontSize: "0.9rem",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255,255,255,0.3)",
                        }}
                    />
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 900,
                            mb: 4,
                            color: "white",
                            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
                            fontSize: { xs: "2.5rem", md: "3.75rem" },
                        }}
                    >
                        Nuestros Servicios
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "rgba(255,255,255,0.9)",
                            maxWidth: 700,
                            mx: "auto",
                            lineHeight: 1.6,
                            fontWeight: 400,
                        }}
                    >
                        Soluciones tecnológicas innovadoras diseñadas para impulsar tu negocio hacia el éxito digital
                    </Typography>
                </Box>

                {/* Services Grid */}
                <Grid
                    container
                    spacing={5}
                    justifyContent={{ xs: "center", sm: "start", md: "center" }}
                    alignItems="stretch"
                    sx={{
                        maxWidth: "1600px",
                        mx: "auto",
                        px: { xs: 2, md: 6 },
                        py: 6,
                    }}
                >
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={index}> {/* This line controls the layout */}
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 8,
                                    background: "rgba(255,255,255,0.98)",
                                    backdropFilter: "blur(20px)",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    position: "relative",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    "&:hover": {
                                        transform: "translateY(-12px) scale(1.02)",
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                                        "& .service-arrow": {
                                            opacity: 1,
                                            transform: "translateX(0) rotate(0deg)",
                                        },
                                        "& .service-progress": {
                                            transform: "scaleX(1)",
                                        },
                                        "& .service-accent": {
                                            opacity: 1,
                                        },
                                    },
                                }}
                            >


                                {/* Background accent */}
                                <Box
                                    className="service-accent"
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        width: 100,
                                        height: 100,
                                        background: `radial-gradient(circle, ${service.accent} 0%, transparent 70%)`,
                                        opacity: 0,
                                        transition: "opacity 0.4s",
                                    }}
                                />

                                <CardHeader
                                    avatar={
                                        <Paper
                                            className="service-icon"
                                            elevation={8}
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 3,
                                                background: service.gradient,
                                                color: "white",
                                                transition: "all 0.4s",
                                                width: 60,
                                                height: 60,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {service.icon}
                                        </Paper>
                                    }
                                    title={
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: "#1a1a1a",
                                                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                                                }}
                                            >
                                                {service.title}
                                            </Typography>
                                            <IconButton
                                                className="service-arrow"
                                                size="small"
                                                sx={{
                                                    opacity: 0,
                                                    transform: "translateX(-15px) rotate(-45deg)",
                                                    transition: "all 0.4s",
                                                    background: service.gradient,
                                                    color: "white",
                                                    width: 35,
                                                    height: 35,
                                                    "&:hover": {
                                                        transform: "translateX(0) rotate(0deg) scale(1.1)",
                                                    },
                                                }}
                                            >
                                                <ArrowForwardIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    }
                                    sx={{ pb: 2 }}
                                />

                                <CardContent sx={{ pt: 0, px: 3, pb: 4, flexGrow: 1 }}>
                                    {/* Rating and stats */}
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Rating
                                                value={service.rating}
                                                precision={0.1}
                                                readOnly
                                                size="small"
                                                sx={{
                                                    "& .MuiRating-iconFilled": {
                                                        color: "#ffa726",
                                                    },
                                                }}
                                            />
                                            <Typography variant="body2" sx={{ fontWeight: 600, color: "#333", ml: 0.5 }}>
                                                {service.rating}
                                            </Typography>
                                        </Box>

                                    </Box>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#555",
                                            lineHeight: 1.6,
                                            mb: 3,
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {service.description}
                                    </Typography>

                                    {/* Technology chips */}
                                    <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
                                        {service.features.map((feature, idx) => (
                                            <Chip
                                                key={idx}
                                                label={feature}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    bgcolor: `${service.color}08`,
                                                    color: service.color,
                                                    fontWeight: 600,
                                                    fontSize: "0.75rem",
                                                    border: `1px solid ${service.color}30`,
                                                    "&:hover": {
                                                        bgcolor: `${service.color}15`,
                                                        transform: "translateY(-1px)",
                                                    },
                                                    transition: "all 0.2s",
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    <Divider sx={{ my: 3, bgcolor: "rgba(0,0,0,0.08)" }} />

                                    {/* Popularity indicator */}
                                    <Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                <TrendingUpIcon sx={{ fontSize: 18, color: service.color }} />
                                                <Typography variant="body2" sx={{ fontWeight: 600, color: "#333" }}>
                                                    Demanda
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" sx={{ color: service.color, fontWeight: 700 }}>
                                                {service.popularity}%
                                            </Typography>
                                        </Box>
                                        <LinearProgress
                                            className="service-progress"
                                            variant="determinate"
                                            value={service.popularity}
                                            sx={{
                                                height: 8,
                                                borderRadius: 4,
                                                bgcolor: `${service.color}15`,
                                                transform: "scaleX(0)",
                                                transformOrigin: "left",
                                                transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
                                                "& .MuiLinearProgress-bar": {
                                                    borderRadius: 4,
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

                {/* Bottom CTA */}
                <Box sx={{ textAlign: "center", mt: 10 }}>
                    <Paper
                        elevation={8}
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 3,
                            px: 6,
                            py: 3,
                            borderRadius: 6,
                            background: "rgba(255,255,255,0.15)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255,255,255,0.3)",
                        }}
                    >
                        <Avatar sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }}>
                            <TrendingUpIcon />
                        </Avatar>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography sx={{ color: "white", fontWeight: 700, fontSize: "1.1rem" }}>
                                +500 proyectos exitosos
                            </Typography>
                            <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                                Entregados con excelencia
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default Services;